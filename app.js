const express = require('express');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/carsford')
.then( db => {
  console.log('Banco de dados conectado com sucesso')
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  })
})
.catch( error => {
  console.error(`Banco de dados não conectado, houve o seguinte erro ${error}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', carRoutes)