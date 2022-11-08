const { Router } = require('express');
const { getAllUsers, getUserById, getUserWithAddress, getUserWithTasks } = require('../Controllers/users.controllers');
const router = Router();

// para obtener a todos los usuarios

router.get('/users', getAllUsers)

router.get('/users/:id', getUserById)

router.get('/users/:id/address', getUserWithAddress)

router.get('/users/:id/tasks', getUserWithTasks)

module.exports = router;