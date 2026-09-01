const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = express.Router();

// POST /api/auth/register
// Creates a new user account
router.post('/register', async (req, res) => {
  try {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({message: 'Name, email and password are required'});
    }

    // Check if this email is already registered
    const existingUser = await User.findOne({email: email.toLowerCase()});
    if (existingUser) {
      return res.status(400).json({message: 'This email is already registered'});
    }

    // Never store the real password - store a bcrypt hash of it
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({message: 'Account created, you can log in now'});
  } catch (error) {
    res.status(500).json({message: 'Server error: ' + error.message});
  }
});

// POST /api/auth/login
// Checks the credentials and returns a token
router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.status(400).json({message: 'Email and password are required'});
    }

    const user = await User.findOne({email: email.toLowerCase()});
    if (!user) {
      return res.status(400).json({message: 'Wrong email or password'});
    }

    // Compare the typed password with the stored hash
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(400).json({message: 'Wrong email or password'});
    }

    // Create a token the app will send with every task request
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({token: token, name: user.name});
  } catch (error) {
    res.status(500).json({message: 'Server error: ' + error.message});
  }
});

module.exports = router;
