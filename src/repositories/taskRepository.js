const Task = require('../models/task')

class TaskRepository {

    async getTasks(ownerId){
        return await Task.findAll({where: ownerId})
    }

    async createTask(newTask){
        return await Task.create(newTask)
    }

    async deleteTask(taskId){
        return await Task.findAll({where: taskId})
    }
}

module.exports = new TaskRepository()