const User = require('../models/user')

class UserRepository {

    async createUser(user){
        return await User.create(user)
    }

    async findUsername(username){
        return await User.findOne({ where: { username }})
    }
}

module.exports = new UserRepository()