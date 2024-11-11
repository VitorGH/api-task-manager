const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'User',  // Define o nome exato da tabela para evitar pluralização
    timestamps: false    // Adiciona createdAt e updatedAt automaticamente
});

module.exports = User;