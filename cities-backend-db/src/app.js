import express from 'express';
import knex from 'knex';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'cities.db'
    },
    useNullAsDefault: true
});

const app = express();
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

app.get('/cities', async (req, res) => {
    const result = await db('cities').select('*');
    res.json(result);
});

app.get('/cities/:city', async (req, res) => {
    const result = await db('cities').select('*').where({name: req.params.city}).first();
    res.json(result);
});


app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});