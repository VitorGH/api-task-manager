const express = require('express')
const userController = require('./controllers/userController')
const taskController = require('./controllers/taskController')
const swaggerUI = require('swagger-ui-express')

const app = express()
app.use(express.json())
app.use('/task-manager/user', userController);
app.use('/task-manager/task', taskController);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server running PORT ${PORT}`)
    console.log(`Documentation running on http://localhost:${PORT}/api-docs`)
})
