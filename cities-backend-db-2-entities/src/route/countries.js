import express from 'express';
const countriesRouter = express.Router();

countriesRouter.get('/countries');
countriesRouter.get('/countries/:country');
countriesRouter.post('/countries');
countriesRouter.put('/countries/:country');
countriesRouter.delete('/countries/:country');

export {
    countriesRouter
}