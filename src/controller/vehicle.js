const req = require("express/lib/request");
const res = require("express/lib/response");
const Vehicle = require("../model/vehicle");

const getVehicle = async(req,res) => {
    try {
        const vehicle = await Vehicle.findAll();
        res.json({vehicle});    
    } catch (error) {
        res.json({error});
    }
    
}


const updateVehicle = async (req,res) => {
    try {
        const id = req.params.id;
        const vehicle = await Vehicle.update(req.body,{
            where : {
                id : id
            }
        });
        res.json({vehicle})
    } catch (error) {
        res.json(error);
    }
}

const createVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.json({vehicle});
    } catch (error) {
        res.json(error);
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.destroy({
            where : {
                id : req.params.id
            }
        })
        res.json('ok');
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getVehicle,
    updateVehicle,
    createVehicle,
    deleteVehicle,
}