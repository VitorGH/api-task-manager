const Task = require('../models/task')

class TaskRepository {

    async createTask(task){
        return await Task.create(task)
    }

    
}

module.exports = new TaskRepository()