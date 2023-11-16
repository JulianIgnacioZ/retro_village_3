const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');

const Product = db.define('Product', {
    idProducto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Product;

