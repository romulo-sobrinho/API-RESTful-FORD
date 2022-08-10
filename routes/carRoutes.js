const express = require('express')
const router = express.Router()
const carControllers = require('../controllers/carControllers')
const cors = require('cors')

// const options = {
//   origin: 'http://localhost:3000'
// }

router.use(cors())

router.get('/', (req, res) => {
  res.render('index')
})
router.get('/all', carControllers.showCars)

router.get('/:category', carControllers.showCarsCategory)

router.post('/', carControllers.addCar)

router.patch('/:id', carControllers.updateCar)

router.delete('/:id', carControllers.deleteCar)

module.exports = router