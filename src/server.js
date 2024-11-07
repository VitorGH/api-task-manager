const express = require('express')
const app = express()



app.get('/showTasks', (req, res) => {
    let tasks = [
        {
            id: 1,
            title: 'first task',
            description: 'task description',
            status: 'concluded',
            createdOn: '12/07/2025',
            lastUpdate: '25/08/2026'
        }
    ]
    res.send(tasks)
})

app.get('/registerTask', (req, res) => {

})

app.listen(3000, () => {
    console.log('Porta 3000 funcionando!')
})