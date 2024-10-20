const express = require('express');

const cities = require('./route/cities.js');

const app = express();
app.use(express.json());

app.use('/', cities);

app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});
