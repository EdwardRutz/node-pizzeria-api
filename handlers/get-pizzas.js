'use strict'

const pizzas = require('../data/pizzas.json')

function getPizzas(pizzaId) {
  if (!pizzaId)
    return pizzas

  const pizza = pizzas.find((pizza) => {
    // Using == allows to match the pizza.id string to a pizzaId integer
    return pizza.id == pizzaId
  })
  if (pizza)
    return pizza

  throw new Error ('The pizza you requested was not found')
}

module.exports = getPizzas
