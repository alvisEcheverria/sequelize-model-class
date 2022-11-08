const { Router } = require('express');
const { getAllTasks, getTaskById, createNewTask } = require('../Controllers/tasks.contollers');

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTaskById);

router.post('/tasks', createNewTask);

module.exports = router;