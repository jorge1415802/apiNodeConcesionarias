const {Sequelize} = require('sequelize');
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = require('../../global/enviroment');

const db = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'postgres',
    port : DB_PORT,
});


module.exports = db;