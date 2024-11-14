const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');
const authenticateToken = require('../middleware/auth');

router.get('/show', authenticateToken, async (req, res) => {
    try {
        const ownerId = req.user.id
        const task = await taskService.getUserTasks(ownerId);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post('/create', authenticateToken, async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const ownerId = req.user.id
        const newTask = await taskService.createTask(title, description, status, ownerId);
        res.status(201).json(newTask)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.delete('/delete', authenticateToken, async (req, res) => {
    try {
        const ownerId = req.user.id
        const task = await taskService.getUserTasks(ownerId);
        res.status(205).json(task)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;