const mongoose = require('mongoose');

// What a user looks like in the database
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // two users cannot share the same email
    lowercase: true,
  },
  password: {
    type: String,
    required: true, // this is a bcrypt hash, never the real password
  },
});

module.exports = mongoose.model('User', userSchema);
