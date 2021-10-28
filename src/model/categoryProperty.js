const { DataTypes } = require("sequelize");
const db = require("../db/config");

const CategoryProperty = db.define('CategoryProperty',{
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
    icon : {
        type : DataTypes.STRING,
        allowNull : false
    }
})
CategoryProperty.sync();
module.exports = CategoryProperty;