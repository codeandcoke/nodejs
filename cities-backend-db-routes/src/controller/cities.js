const db = require('../configuration/database.js').db;

// Operación que devuelve todas las ciudades de la base de datos
const getCities = (async (req, res) => {
    const result = await db('cities').select('*');

    res.status(200).json(result);
});

// Operación que devuelve una ciudad determinada
const getCity = (async (req, res) => {
    const result = await db('cities').select('*').where({name: req.params.city}).first();

    res.status(200).json(result);
});

// Operación que registra una nueva ciudad en la base de datos
const postCity = (async (req, res) => {
    await db('cities').insert({
        name: req.body.name,
        population: req.body.population,
        altitude: req.body.altitude
    });

    res.status(201).json({});
});

// Operación que modifica una ciudad en la base de datos
const putCity = (async (req, res) => {
    await db('cities').where({ name: req.params.city }).update({
        population: req.body.population,
        altitude: req.body.altitude
    });

    res.status(204).json({});
});

// Operación que elimina una ciudad de la base de datos
const deleteCity = (async (req, res) => {
    const cityName = req.params.city;
    await db('cities').del().where({name: cityName});

    res.status(204).json({})
});

module.exports = {
    getCities,
    getCity,
    postCity,
    putCity,
    deleteCity,
};