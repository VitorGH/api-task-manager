const taskRepository = require('../repositories/taskRepository');

class TaskService {

    async create(title, description, status){
        
        const task = await taskRepository.addTask({
            title: title,
            description: description,
            status: status,
            createdAt: new Date(),
            updatedAt: new Date()
        })

        return task
    }
}

module.exports = new TaskService()