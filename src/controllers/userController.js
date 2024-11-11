const express = require('express')
const router = express.Router()
const userService = require('../services/userService')

router.get('/showUsers', (req, res) => {
    res.json(users)
})

router.post('/users', async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await userService.register(username, password);
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})