const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  phone: String,
  vehicle: String,
  password: { type: String, required: true },
  familyEmails: [String],
  currentAlert: {
    location: String,
    timestamp: Date,
    active: { type: Boolean, default: false }
  }  // for fall
});

module.exports = mongoose.model('User', userSchema);

