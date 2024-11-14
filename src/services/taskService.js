const taskRepository = require('../repositories/taskRepository')

class TaskService {
    async getUserTasks(ownerId){
        return taskRepository.getTasks(ownerId)
    }

    async createTask(title, description, status, ownerId){
        return taskRepository.createTask({
            title: title,
            description: description,
            status: status,
            ownerId: ownerId
        })
    }

    async updateTask(newStatus, taskId){
        return taskRepository.updateTask(newStatus, taskId)
    }

    async deleteTask(taskId){
        return taskRepository.deleteTask(taskId)
    }
}

module.exports = new TaskService()