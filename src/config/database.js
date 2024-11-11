const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'dom.sqlite'
});

sequelize.authenticate() 
    .then(() => {
        console.log('Connected DB with sequelize.');
        return sequelize.sync({ force: true });
    })
    .catch(err => {
        console.error('Error in src/config/database.js ' + err);
    })

    


module.exports = sequelize;