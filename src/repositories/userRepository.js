const User = require('../models/')

class TaskRepository {
    async createUser(user){
        return await User.create(user)
    }
}

module.exports = new TaskRepository()