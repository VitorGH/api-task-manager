const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true
    },

    status: {
        type: DataTypes.STRING,
        allowNull: true
    },

    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    tableName: 'Task',  // Define o nome exato da tabela para evitar pluralização
    timestamps: true    // Adiciona createdAt e updatedAt automaticamente
});

Task.hasMany(Task);
User.belongsTo(Task, {
    as: 'ownerId',
    constraints: false 
})

module.exports = Task;