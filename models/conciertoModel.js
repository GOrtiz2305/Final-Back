const {sequelize} = require('../database/database');
const { DataTypes } = require('sequelize');

const Concierto = sequelize.define('conciertos', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Concierto;