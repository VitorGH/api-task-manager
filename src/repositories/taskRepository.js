const Task = require('../models/task')

class TaskRepository {
    async addTask(task){
        return await Task.create(task)
    }
}

module.exports = new TaskRepository()