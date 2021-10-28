const req = require("express/lib/request");
const res = require("express/lib/response");
const VehicleProperty = require("../model/vehicleProperty");

const getVehicleProperties = async(req,res) => {
    try {
        const property = await VehicleProperty.findAll();
        res.json({property})    
    } catch (error) {
        res.json(error)
    }
    
}

const createVehicleProperty = async (req,res) => {
    try {
        const property = await VehicleProperty.create(req.body);
        res.json({property});
    } catch (error) {
        res.json(error);
    }
}

const updateVehicleProperty = async(req, res) => {
    try {
        const property = await VehicleProperty.update(req.body,{
            where : {
                id : req.params.id
            }
        });
        res.json('updated')
    } catch (error) {
        res.json(error);
    }
}

const deleteVehicleProperty = async (req, res) => {
    try {
        await VehicleProperty.destroy({
            where : {
                id : req.params.id
            }
        })
        res.json('ok');
    } catch (error) {
        res.json(error);
    }
}


module.exports = {
    getVehicleProperties,
    createVehicleProperty,
    updateVehicleProperty,
    deleteVehicleProperty
}