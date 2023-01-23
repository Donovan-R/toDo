const express = require('express');
const router = express.Router();

const {
  createTask,
  getAllTasks,
  //   getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks.js');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;
