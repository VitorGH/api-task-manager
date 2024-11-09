const express = require('express')
const router = express.Router()
const taskService = require('../services/taskService')

// let tasks, users = [];

router.post('/register', async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const task = await taskService.create(title, description, status);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/showAll', async (req, res) => {
    try {
        const tasks = await userService.getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router