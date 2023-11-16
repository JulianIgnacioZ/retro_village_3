const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect: 'mysql',
    host: "localhost",
    port: "3306",
    database: "retro_village",
    username: "root",
    password: "Bhubhubhuhuhu12",
    timestamps: false,
});

db.authenticate().then(() => console.log("Conectado a MySQL con exito"));

module.exports = (db);