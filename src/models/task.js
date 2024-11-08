const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Tasks', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
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

    createdOn: {
        type: DataTypes.DATE,
        allowNull: true
    },

    lastUpdate: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

module.exports = Task;