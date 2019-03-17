'use strict'

//An API to get information on the menu of pizzas

const Api = require('claudia-api-builder')
const api = new Api()

const getPizzas = require('./handlers/get-pizzas')

//View, send a GET request to / to READ to a acknowledgement message when root is accessed
api.get('/', () => 'Welcome to Pizza API')

//View, send a GET request to /pizzas to READ a list of pizzas
api.get('/pizzas', () => {
  return getPizzas()
})

//View, GET request to /pizzas/{id} to READ info on a specific pizza
api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id)
}, {
  error: 404
})

module.exports = api
