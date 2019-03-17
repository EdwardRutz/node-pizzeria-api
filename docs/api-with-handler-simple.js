'use strict'

//The API handler is part of api.js and returns a small list
//Moved an enhanced api handler to /handlers/get-pizzas.js

const Api = require('claudia-api-builder')
const api = new Api

api.get('/pizzas', () => {
  return [
    'Capricciosa',
    'Quttro Formaggi',
    'Napoletan',
    'Magherita'
    ]
  })

module.exports = api

