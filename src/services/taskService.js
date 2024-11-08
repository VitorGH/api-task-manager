const taskRepository = require('../repositories/taskRepository');

class TaskService {
    async create(title, description, status){
        const task = await taskRepository.createTask({
            title: title,
            description: description,
            status: status,
            createdOn: new Date(),
            lastUpdate: new Date()
        })
        return task
    }

    async update(id, title, description, status){
        
        return task
    }

    async getTasks(){
        return taskRepository.findAll()
    }
}