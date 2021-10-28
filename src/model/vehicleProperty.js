const { DataTypes } = require("sequelize");
const db = require("../db/config");
const CategoryProperty = require("./categoryProperty");

const VehicleProperty = db.define('VehicleProperty',{
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
    category : {
        type : DataTypes.STRING,
    }
})

CategoryProperty.hasMany(VehicleProperty,{foreignKey:'category_id'});
VehicleProperty.belongsTo(CategoryProperty,{foreignKey:'category_id'});
VehicleProperty.sync({alter : true});
module.exports = VehicleProperty;