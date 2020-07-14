'use strict'
const express = require('express')
const Router = express.Router()

const {
  findCollection,
  findByIDCollection,
  queryCollection,
  create,
  update,
  remove,
  createMany,
  searchCollection,
  joinCollection
} = require('../controllers/index')

Router.get('/:collection', findCollection)
Router.get('/:collection/:id', findByIDCollection)
Router.post('/create/:collection', create)
Router.put('/update/:collection', update)
Router.delete('/remove/:collection', remove)
Router.post('/createmany/:collection', createMany)
Router.post('/query/:collection', queryCollection)
Router.post('/search/:collection', searchCollection)
Router.post('/join/:collection', joinCollection)

module.exports = Router
