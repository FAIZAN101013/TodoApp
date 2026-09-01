const express = require('express');

const Task = require('../models/Task');
const auth = require('../middleware/auth');

const router = express.Router();

// Every route below requires a valid login token
router.use(auth);

// GET /api/tasks
// Returns all tasks belonging to the logged-in user, newest first
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({user: req.userId}).sort({createdAt: -1});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({message: 'Server error: ' + error.message});
  }
});

// POST /api/tasks
// Creates a new task for the logged-in user
router.post('/', async (req, res) => {
  try {
    const {title, description, deadline, priority} = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({message: 'Title is required'});
    }

    const task = await Task.create({
      user: req.userId,
      title: title.trim(),
      description: description || '',
      deadline: deadline || '',
      priority: priority || 'Medium',
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({message: 'Server error: ' + error.message});
  }
});

// PUT /api/tasks/:id
// Updates a task (we use it to toggle "completed")
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {_id: req.params.id, user: req.userId}, // only the owner can update
      req.body,
      {new: true}, // return the updated task
    );

    if (!task) {
      return res.status(404).json({message: 'Task not found'});
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({message: 'Server error: ' + error.message});
  }
});

// DELETE /api/tasks/:id
// Deletes a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId, // only the owner can delete
    });

    if (!task) {
      return res.status(404).json({message: 'Task not found'});
    }

    res.json({message: 'Task deleted'});
  } catch (error) {
    res.status(500).json({message: 'Server error: ' + error.message});
  }
});

module.exports = router;
