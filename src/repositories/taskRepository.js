const Task = require('../models/task')

class TaskRepository {

    async getTasks(ownerId){
        return await Task.findAll({where: ownerId})
    }

    async createTask(newTask){
        return await Task.create(newTask)
    }

    async updateTask(newStatus, taskId){
        return await Task.update(
            { status: newStatus },
            { where: { id: taskId } }
        );
    }

    async deleteTask(taskId){
        return await Task.destroy({where: {id: taskId}})
    }
}

module.exports = new TaskRepository()