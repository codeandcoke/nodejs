const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const cities = {
    'Zaragoza': {
        altitude: 199,
        population: 673010
    },
    'Huesca': {
        altitude: 488,
        population: 53305
    },
    'Teruel': {
        altitude: 915,
        population: 25900
    }
};

/**
 * Operación que devuelve el listado completo de las ciudades
 */
app.get('/cities', (req, res) => {
    res.json(cities);
});

/**
 * Operación que devuelve los detalles de una ciudad
 */
app.get('/cities/:city', (req, res) => {
    const city = req.params.city;
    res.json(cities[city]);
});

/**
 * Operación que registra una nueva ciudad
 */
app.post('/cities', (req, res) => {
    const name = req.body.name;
    const altitudeValue = req.body.altitude;
    const populationValue = req.body.population;

    cities[name] = {
        altitude: altitudeValue,
        population: populationValue
    };
    console.log(cities);
    res.status(201).end();
});

app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});