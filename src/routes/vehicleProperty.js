const { Router } = require('express');
const { getVehicleProperties, createVehicleProperty, updateVehicleProperty, deleteVehicleProperty } = require('../controller/vehicleProperty');

const router = Router();

router.get('/',getVehicleProperties);
router.post('/create',createVehicleProperty);
router.patch('/update/:id',updateVehicleProperty);
router.delete('/delete/:id',deleteVehicleProperty);

module.exports = router;