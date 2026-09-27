import express from 'express';
const citiesRouter = express.Router();

import { getCities, getCity, postCity, putCity, deleteCity } from '../controller/cities.js';

citiesRouter.get('/cities', getCities);
citiesRouter.get('/cities/:city', getCity);
citiesRouter.post('/cities', postCity);
citiesRouter.put('/cities/:city', putCity);
citiesRouter.delete('/cities/:city', deleteCity);

export {
    citiesRouter
}