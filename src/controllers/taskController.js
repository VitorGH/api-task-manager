const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');
const authenticateToken = require('../middleware/auth');

router.post('/show', authenticateToken, async (req, res) => {
    try {
        const task = await taskService.getUserTasks();
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})