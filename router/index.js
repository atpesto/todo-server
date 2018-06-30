const express = require('express');

const router = express.Router();

const todos = [
  {
    id: 0,
    text: 'Complete the app',
    completed: false,
  },
  {
    id: 1,
    text: 'Sleep',
    completed: false,
  },
  {
    id: 2,
    text: 'Another random one',
    completed: true,
  },
]


router.get('/todos', (req, res) => {
  res.json(todos);
});

router.get('todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.filter(todo => todo.id === id);
  res.json(todo);
});