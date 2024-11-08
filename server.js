const express = require('express')
const app = express()
const mockdata = require('./src/MOCK_DATA.json')

app.use(express.json())

let tasks = []
let users = []

app.get('/showUsers', (req, res) => {
    res.json(users)
})

app.post('/registerUser', (req, res) => {
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

app.get('/showTasks', (req, res) => {
    res.json(tasks)
})

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server running PORT ${PORT}`)
})