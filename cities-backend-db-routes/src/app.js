import express from 'express';

import { citiesRouter } from './route/cities.js';

const app = express();
app.use(express.json());

app.use('/', citiesRouter);

app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});
