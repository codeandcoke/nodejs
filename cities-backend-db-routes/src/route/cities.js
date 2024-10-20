const express = require('express');
const router = express.Router();

const { getCities, getCity, postCity, putCity, deleteCity } = require('../controller/cities.js');

router.get('/cities', getCities);
router.get('/cities/:city', getCity);
router.post('/cities', postCity);
router.put('/cities/:city', putCity);
router.delete('/cities/:city', deleteCity);

module.exports = router;