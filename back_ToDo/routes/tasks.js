const express = require('express');
const router = express.Router();

const {
  createTask,
  getAllTasks,
  //   getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
} = require('../controllers/tasks.js');

router.route('/').get(getAllTasks).post(createTask).delete(deleteAllTasks);
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;
