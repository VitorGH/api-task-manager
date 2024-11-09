const express = require('express')
const router = express.Router()

router.get('/showUsers', (req, res) => {
    res.json(users)
})

router.post('/registerUser', (req, res) => {
    try {
        const {username, password} = req.body;
        
        users.push({
            id: (users.length + 1),
            username: username,
            password: password
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})