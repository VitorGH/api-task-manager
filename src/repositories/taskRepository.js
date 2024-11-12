const Task = require('../models/task')

class TaskRepository {

    async getTasks(ownerId){
        return await Task.findAll({where: ownerId})
    }
    
}

module.exports = new TaskRepository()