const taskRepository = require('../repositories/taskRepository')

class TaskService {
    async getUserTasks(ownerId){
        return taskRepository.getTasks(ownerId)
    }
}

module.exports = new TaskService()