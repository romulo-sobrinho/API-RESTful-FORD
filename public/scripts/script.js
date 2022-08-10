document.addEventListener('DOMContentLoaded', () => {
  updateCards();
});

function updateCards() {
  fetch("http://192.168.2.104:3000/all").then( res => {
    return res.json()
  }).then( json => {
    let cardElements = ""
    let cars = JSON.parse(json)
    cars.forEach( car => {
      let cardElement = `<div class="card-main">
                            <h3 id="model">${car.model}</h3>
                            <img src="${car.image}" alt="Imagem do Ford ${car.model}">
                            <div class="card-info">
                              <ul>
                                <li>Categoria: ${car.category}</li>
                                <li>Motor: ${car.engine}</li>
                                <li>Potência: ${car.horsepower}</li>
                                <li>Torque: ${car.torque}</li>
                                <li>Combustível: ${car.fuel}</li>
                              </ul>
                            </div>
                          </div>`
      cardElements += cardElement
    })
    document.getElementById("main-container").innerHTML = cardElements
  })
}

function mostrar() {
  console.log("Deu click")
}