const Task = require('../models/task')

class TaskRepository {
    async createTask(task){
        return await Task.create(task)
    }

    async findById(id){
        return await Task.findOne({where: {id}})
    }

    async findAll(){
        return await Task.findAll()
    }
}

module.exports = new TaskRepository()