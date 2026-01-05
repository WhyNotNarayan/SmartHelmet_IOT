const express = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const User = require('../models/User.js');  // Add .js or keep without, but path correct

const router = express.Router();

// Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_APP_PASS
  }
});

// GET pages
router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));

// POST signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, phone, vehicle, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.send("Email already registered!");

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({
      username, email, phone, vehicle, password: hashed, familyEmails: []
    });
    await newUser.save();
    res.send(`Signup successful! <a href="/auth/login">Login here</a>`);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

// POST login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.send("Email not found!");

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Pass user to dashboard
      res.render('dashboard', { user });
    } else {
      res.send("Wrong password!");
    }
  } catch (err) {
    res.send("Error");
  }
});

// Dashboard
router.get('/dashboard', async (req, res) => {
  // For now, find first user (replace with real session later)
  const user = await User.findOne() || { username: "Guest", familyEmails: [] };
  res.render('dashboard', { user });
});

// Family emails page
router.get('/family', async (req, res) => {
  const user = await User.findOne() || { familyEmails: [] };
  res.render('family', { user });
});

// Add email
router.post('/add-email', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne();
    if (user && !user.familyEmails.includes(email)) {
      user.familyEmails.push(email);
      await user.save();
    }
    res.send("Email added");
  } catch (err) {
    res.send("Error");
  }
});

// Remove email
router.post('/remove-email', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne();
    if (user) {
      user.familyEmails = user.familyEmails.filter(e => e !== email);
      await user.save();
    }
    res.send("Email removed");
  } catch (err) {
    res.send("Error");
  }
});

// Fall alert routes
router.post('/safe', async (req, res) => {
  const user = await User.findOne();
  if (user) user.currentAlert = null;
  await user?.save();
  res.send("Alert cancelled");
});

router.post('/not-safe', async (req, res) => {
  const user = await User.findOne();
  if (user && user.currentAlert) {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.familyEmails.join(','),
      subject: '🚨 ACCIDENT - HELP NEEDED',
      text: `Rider fell!\nLocation: ${user.currentAlert.location || 'Not available'}`
    };
    await transporter.sendMail(mailOptions);
    user.currentAlert = null;
    await user.save();
    res.send("Alert sent");
  } else {
    res.send("No alert");
  }
});

// Logout Route
router.get('/logout', (req, res) => {
  // If you are using express-session
  if (req.session) {
      req.session.destroy(err => {
          if (err) {
              return res.status(500).send("Could not log out.");
          } else {
              res.clearCookie('connect.sid'); // Clear the session cookie
              res.redirect('/auth/login');    // Send back to login
          }
      });
  } else {
      res.redirect('/auth/login');
  }
});

module.exports = router;