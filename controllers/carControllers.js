const Car = require('../models/Cars')

const showCars = async (req, res) => {
  try {
    const car = await Car.find()
    if(!car) {
      res.status(422).json({message: 'Não foi encontrado nenhum carro na base de dados'})
    }
    res.status(200).json(JSON.stringify(car))
  } catch (error) {
    res.status(500).json({message: error})
  }
}

const showCarsCategory = async (req, res) => {
  const {category} = req.params

  try {
    const cars = await Car.find({category})

    if(!cars || cars.length == 0) {
      res.status(422).json({message: 'Nenhum veículo dessa categoria foi encontrado'})
      return
    }

    res.status(200).json({cars})
  } catch (error) {
    res.status(500).json({message: error})
  }
}

const addCar =  async (req, res) => {
  const {model, category, engine, horsepower, torque, fuel, image} = req.body
  if(!model) {
    res.status(422).json({message: 'Modelo do veículo é obrigatório'})
    return
  }

  // model = model.toLowerCase();
  // model = model[0].toUpperCase() + model.substring(1);

  if(!category) {
    res.status(422).json({message: 'Categoria do veículo é obrigatório'})
    return
  }

  if(!engine) {
    res.status(422).json({message: 'Motor do veículo é obrigatório'})
    return
  }

  if(!horsepower) {
    res.status(422).json({message: 'Potência do veículo é obrigatório'})
    return
  }

  if(!torque) {
    res.status(422).json({message: 'Torque do veículo é obrigatório'})
    return
  }

  
  if(!fuel) {
    res.status(422).json({message: 'Tipo de combustível do veículo é obrigatório'})
    return
  }

  if(!image) {
    res.status(422).json({message: 'URL da iamgem do veículo é obrigatório'})
    return
  }

  if(await Car.findOne({model})) {
    res.status(422).json({message: 'Veículo não pode ser cadastrado, já existe esse modelo'})
    return
  }

  const car = {
    model, category, engine, horsepower, torque, fuel, image
  }

  try {
    await Car.create(car)
    res.status(201).json({message: 'Veículo cadastrado com sucesso'})
  }catch (error) {
    res.status(500).json({message: error})
  }
}

const updateCar = async (req, res) => {
  const id = req.params.id
  const {model, category, engine, horsepower, torque, fuel, image} = req.body

  try {
    const car = await Car.updateOne({_id: id}, {model, category, engine, horsepower, torque, fuel, image})

    if(car.matchedCount === 0) {
      res.status(422).json({message: 'Veículo não localizado na base de dados, assim não foi possível realizar a atualização'})
      return
    }

    res.status(200).json({message: 'Veículo atualizado com sucesso'})
  } catch (error) {
    res.status(500).json({message: error})
  }
}

const deleteCar = async (req, res) => {
  const id = req.params.id

  const car = Car.findOne({_id:id})
    
  if(!car) {
    res.status(422).json({message: 'Nenhum veículo com esse ID foi encontrado'})
  }

  try { 
    await Car.deleteOne({_id: id})
    res.status(200).json({message: 'Veículo deletado da base de dados com sucesso'})
  } catch (error) {
    res.status(500).json({message: error})
  }
}


module.exports = {showCars, showCarsCategory, addCar, updateCar, deleteCar}
