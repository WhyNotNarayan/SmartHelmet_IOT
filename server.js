const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public')); // for css/js later

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch(err => console.log('MongoDB Error: ', err));

// Routes (we'll create these next)
app.use('/auth', require('./routes/auth'));
app.use('/alert', require('./routes/alert'));

// Home route
app.get('/', (req, res) => {
  res.render('login');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Open browser → http://localhost:${PORT}`);
});

// In server.js, add this route for ESP32 fall trigger
app.post('/alert/fall', async (req, res) => {
    const { userId, location } = req.body;
    const user = await User.findById(userId);
    if (user) {
      user.currentAlert = { location, timestamp: Date.now() };
      await user.save();
      res.send("Fall alert triggered for user");
    } else {
      res.send("User not found");
    }
  });