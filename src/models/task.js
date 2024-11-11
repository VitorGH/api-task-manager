const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user')

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
        primaryKey: true,
        allowNull: false
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: 'now()'
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

Task.hasMany(User, {
    foreignKey: "fk_user_id",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})

module.exports = Task;