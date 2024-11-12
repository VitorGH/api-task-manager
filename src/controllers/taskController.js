const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');
const authenticateToken = require('../middleware/auth');

router.get('/show', authenticateToken, async (req, res) => {
    try {
        console.log('req.user', req.user)
        const ownerId = req.user.id
        console.log('ownerId', ownerId)
        const task = await taskService.getUserTasks(ownerId);
        res.json(task)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;