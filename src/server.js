const express = require('express');
const cors = require('cors');
const vehicle = require('./routes/vehicle');
const category = require('./routes/category');
const property = require('./routes/vehicleProperty');
const { connection } = require('./db/connection');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:true,credentials:true}));

// conexion
const connect = async() => {
    await connection();
}
connect();

// routes
app.use(express.static('public'))
app.use('/vehicle',vehicle);
app.use('/category',category);
app.use('/property',property);

module.exports = app;