const { db } = require('../configuration/database.js');

// Operación que devuelve todas las ciudades de la base de datos
const findAllCities = (async () => {
    const result = await db('cities').select('*');
    return result;
});

// Operación que devuelve una ciudad determinada
const findCity = (async (cityName) => {
    const result = await db('cities').select('*').where({name: cityName}).first();
    return result;
});

// Operación que registra una nueva ciudad en la base de datos
const registerCity = (async (cityName, cityPopulation, cityAltitude) => {
    const result = await db('cities').insert({
        name: cityName,
        population: cityPopulation,
        altitude: cityAltitude
    });

    return result;
});

// Operación que modifica una ciudad en la base de datos
const modifyCity = (async (cityName, cityPopulation, cityAltitude) => {
    const result = await db('cities').where({ name: cityName }).update({
        population: cityPopulation,
        altitude: cityAltitude
    });

    return result;
});

// Operación que elimina una ciudad de la base de datos
const removeCity = (async (cityName) => {
    const result = await db('cities').del().where({name: cityName});

    return result;
});

module.exports = {
    findAllCities,
    findCity,
    registerCity,
    modifyCity,
    removeCity,
};