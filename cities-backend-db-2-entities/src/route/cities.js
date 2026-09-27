import express from 'express';
import { getCities, getCity, postCity, putCity, deleteCity } from '../controller/cities';
const citiesRouter = express.Router();

citiesRouter.get('/cities', getCities);
citiesRouter.get('/cities/:city', getCity);
citiesRouter.post('/cities', postCity);
citiesRouter.put('/cities/:city', putCity);
citiesRouter.delete('/cities/:city', deleteCity);

export {
    citiesRouter
}