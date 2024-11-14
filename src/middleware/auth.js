const jwt = require('jsonwebtoken');
const SECRET_KEY = 'project-admin-key';

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing.' });
    }

    const token = authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({ error: 'Token not provided.' })
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        
        if (err) {
            console.error("Erro de verificação do token:", err);
            return res.status(403).json({ error: 'Token is not valid.' });
        }

        req.user = user;
        
        next();
    });
}

module.exports = authenticateToken;