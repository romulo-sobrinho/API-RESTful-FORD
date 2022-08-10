const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
  model: {type: 'string', required: true},
  category: {type: 'string', required: true},
  engine: {type: 'string', required: true},
  horsepower: {type: 'string', required: true},
  torque: {type: 'string', required: true},
  fuel: {type: 'string', required: true},
  image: {type: 'string', required: true}
})

const Car = mongoose.model('Car', carsSchema)
module.exports = Car