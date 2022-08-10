const express = require('express')
const router = express.Router()
const carControllers = require('../controllers/carControllers')

router.get('/', carControllers.showCars)

router.get('/:category', carControllers.showCarsCategory)

router.post('/', carControllers.addCar)

router.patch('/:id', carControllers.updateCar)

router.delete('/:id', carControllers.deleteCar)

module.exports = router