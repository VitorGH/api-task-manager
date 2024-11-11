const taskRepository = require('../repositories/taskRepository')

class TaskService {
    async getUserTasks(id){
        return taskRepository.getTasks(id)
    }
}

module.exports = new TaskService()