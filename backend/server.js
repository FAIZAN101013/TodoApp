// Load the variables from the .env file (MONGO_URI, JWT_SECRET, PORT)
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

const app = express();

// Allow the mobile app to call this server
app.use(cors());

// Automatically parse JSON request bodies
app.use(express.json());

// All auth endpoints live under /api/auth (register, login)
app.use('/api/auth', authRoutes);

// All task endpoints live under /api/tasks (list, add, update, delete)
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

// First connect to MongoDB, then start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server running on port ' + PORT);
    });
  })
  .catch(error => {
    console.error('MongoDB connection failed:', error.message);
  });
