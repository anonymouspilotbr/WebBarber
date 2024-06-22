const Sequelize = require('sequelize');
const database = require('../db');

const Servico = database.define('servico', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})