const Task = require('../models/task')

class TaskRepository {

    async getTasks(id){
        return await Task.findAll({where: id})
    }

    
}

module.exports = new TaskRepository()