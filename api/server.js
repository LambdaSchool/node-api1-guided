// IMPORTS AT THE TOP
const express = require('express')
const Dog = require('./dog-model')
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
  // pull the id parameter from the path
  // use that id to call the database function findById
  // either that dogs exists or it doesnt
  // if no dog send a 404
  // send the dog
  // handle errors
  const id = req.params.id  // const { id } = req.params
  console.log(id)
})
// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => {
  Dog.findAll()
    .then(dogs => {
      res.status(200).json(dogs)
    })
    .catch(err => {
      res.status(500).json({
        message: err.message,
      })
    })
})
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs', (req, res) => {
  res.status(201).json({ message: `creating ${req.body.name}` })
})
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
server.put('/api/dogs/:id', (req, res) => {
  res.status(200).json({ message: `updating dog with id ${req.params.id}` })
})
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)
server.delete('/api/dogs/:id', (req, res) => {
  res.status(200).json({ message: `deleting dog with id ${req.params.id}` })
})
// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server
