import express from 'express';
import knex from 'knex';

// Configuración de la base de datos: tipo, ubicación y otros parámetros
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'cities.db'
    },
    useNullAsDefault: true
});

const app = express();
app.use(express.json());

// Operación que devuelve todas las ciudades de la base de datos
app.get('/cities', async (req, res) => {
    const result = await db('cities').select('*');

    res.status(200).json(result);
});

// Operación que devuelve una ciudad determinada
app.get('/cities/:city', async (req, res) => {
    const result = await db('cities').select('*').where({name: req.params.city}).first();

    res.status(200).json(result);
});

// Operación que registra una nueva ciudad en la base de datos
app.post('/cities', async (req, res) => {
    await db('cities').insert({
        name: req.body.name,
        population: req.body.population,
        altitude: req.body.altitude
    });

    res.status(201).json({});
});

// Operación que modifica una ciudad en la base de datos
app.put('/cities/:city', async (req, res) => {
    await db('cities').where({ name: req.params.city }).update({
        population: req.body.population,
        altitude: req.body.altitude
    });

    res.status(204).json({});
});

// Operación que elimina una ciudad de la base de datos
app.delete('/cities/:city', async (req, res) => {
    const cityName = req.params.city;
    await db('cities').del().where({name: cityName});

    res.status(204).json({})
});

app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});
