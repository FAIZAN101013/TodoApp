const mongoose = require('mongoose');

// What a task looks like in the database
const taskSchema = new mongoose.Schema({
  // Which user owns this task
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  // Deadline typed by the user, e.g. "2026-09-05 18:00"
  deadline: {
    type: String,
    default: '',
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  // Date-time the task was created (set automatically)
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Task', taskSchema);
