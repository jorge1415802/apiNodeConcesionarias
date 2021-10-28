const { Router } = require('express');
const { getVehicle, updateVehicle, createVehicle, deleteVehicle } = require('../controller/vehicle');
const router = Router();


router.get('/',getVehicle);
router.post('/create',createVehicle);
router.patch('/:id',updateVehicle);
router.delete('/:id',deleteVehicle);

module.exports = router;