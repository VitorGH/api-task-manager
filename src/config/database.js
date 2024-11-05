const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'dom.sqlite'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso.');
        return sequelize.sync();
    })

    .catch(err => {
        console.error('Não foi possível se conectar.', err);
    })

module.exports = sequelize;