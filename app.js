const express = require('express');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');




app.get('/', (req, res) => {
  res.send('<h1>HELLO WORLD</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));