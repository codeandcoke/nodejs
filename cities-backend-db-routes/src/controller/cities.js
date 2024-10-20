const { findAllCities, findCity, registerCity, modifyCity, removeCity} = require('../service/cities.js');

// Operación que devuelve todas las ciudades de la base de datos
const getCities = (async (req, res) => {
    const data = await findAllCities();

    res.status(200).json(data);
});

// Operación que devuelve una ciudad determinada
const getCity = (async (req, res) => {
    const data = await findCity(req.params.city);

    res.status(200).json(data);
});

// Operación que registra una nueva ciudad en la base de datos
const postCity = (async (req, res) => {
    await registerCity(req.body.name, req.body.population, req.body.altitude);

    res.status(201).json({});
});

// Operación que modifica una ciudad en la base de datos
const putCity = (async (req, res) => {
    await modifyCity(req.params.city, req.body.population, req.body.altitude);

    res.status(204).json({});
});

// Operación que elimina una ciudad de la base de datos
const deleteCity = (async (req, res) => {
    await removeCity(req.params.city);

    res.status(204).json({})
});

module.exports = {
    getCities,
    getCity,
    postCity,
    putCity,
    deleteCity,
};