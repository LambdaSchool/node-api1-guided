// IMPORTS AT THE TOP
const express = require('express')

// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE
server.use(express.json()) // teaches express to parse req.body as JSON

// ENDPOINTS

// [GET] / (Hello World endpoint)
server.get('/api/hello', (req, res) => {
  console.log(req.method)
  res.status(200).json({ message: "Hello World!!!" })
})
// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', (req, res) => {
  res.status(200).json({ message: 'fetching dog by its id'})
})
// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => {
  res.status(200).json({ message: 'fetching all the dogs'})
})
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs')
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server
