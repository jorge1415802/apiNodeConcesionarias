const { DataTypes } = require("sequelize");
const db = require("../db/config");

const Vehicle = db.define('Vehicle',{
    id : {
        type : DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement : true,
        allowNull :false,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    properties : {
        type : DataTypes.ARRAY(DataTypes.STRING)
    }
})

Vehicle.sync();

module.exports = Vehicle;
