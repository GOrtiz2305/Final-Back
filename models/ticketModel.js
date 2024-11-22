const {sequelize} = require('../database/database');
const { DataTypes } = require('sequelize');

const Ticket = sequelize.define('tickets', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    concierto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Ticket;