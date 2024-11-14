const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/userRepository')
const SECRET_KEY = 'project-admin-key';

class UserService {
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await userRepository.createUser({username, password: hashedPassword})
        return user
    }

    async login(username, password){
        const user = await userRepository.findUsername(username);
        
        if(!user){
            throw new Error('User not found.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            throw new Error('Invalid password.');
        }

        const token = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: '24h'});
        
        return token;
    }
}

module.exports = new UserService()