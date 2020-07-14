'use strict'
const { success, error, responseData } = require('../helpers/response')
const { errorHandler } = require('../helpers/errorHandler')
const findCollection = async (req, res) => {
  const { collection } = req.params
  const dbmongo = req.app.get('dbmongo')
  try {
    const result = await dbmongo.find(collection)
    success(req, res, result)
  } catch (err) {
    error(req, res, err)
  }
}

const findByIDCollection = async (req, res) => {
  const { collection, id } = req.params
  const dbmongo = req.app.get('dbmongo')
  try {
    const result = await dbmongo.findByID(collection, id)
    success(req, res, result)
  } catch (err) {
    error(req, res, err)
  }
}

const queryCollection = async (req, res) => {
  const { collection } = req.params
  const query = req.body
  const dbmongo = req.app.get('dbmongo')
  try {
    if (Object.keys(query).length === 0) {
      errorHandler('no se ha definido QUERY')
    }
    const result = await dbmongo.query(collection, query)
    success(req, res, result)
  } catch (err) {
    error(req, res, err)
  }
}

const searchCollection = async (req, res) => {
  const { collection } = req.params
  const keyword = req.body
  const dbmongo = req.app.get('dbmongo')
  try {
    const result = await dbmongo.search(collection, keyword)
    success(req, res, result)
  } catch (error) {
    error(req, res, error)
  }
}

const joinCollection = async (req,res) => {
  const {collection} = req.params
  const query = req.body
  const dbmongo = req.app.get('dbmongo')
  try {
    const result = await dbmongo.join(collection, query)
    success(req, res, result)
  } catch (error) {
    error(req, res, error)
  }
}

const create = async (req, res) => {
  const { collection } = req.params
  const  body  = req.body
  const dbmongo = req.app.get('dbmongo')
  try {
    const resultCreate = await dbmongo.create(collection, body)
    const result = responseData(resultCreate)
    success(req, res, result)
  } catch (error) {
    error(req, res, error)
  }
}

const update = async (req, res) => {
  const { collection } = req.params
  const { set, query } = req.body
  const data = { set, query }
  const dbmongo = req.app.get('dbmongo')
  try {
    const resultUpdate = await dbmongo.update(collection, data)
    const result = responseData(resultUpdate)
    success(req, res, result)
  } catch (error) {
    console.log(error)
    error(req, res, error)
  }
}

const remove = async (req, res) => {
  const { collection } = req.params
  const data = req.body
  const dbmongo = req.app.set('dbmongo')

  try {
    const resultDelete = await dbmongo.delete(collection, data)
    const result = responseData(resultDelete)
    success(req, res, result)
  } catch (error) {
    error(req, res, error)
  }
}

const createMany = async (req, res) => {
  const { collection } = req.params
  const data = req.body
  const dbmongo = req.app.get('dbmongo')
  try {
    const resultCreateMany = await dbmongo.createMany(collection, data)
    const result = responseData(resultCreateMany)
    success(req, res, result)
  } catch (error) {
    error(req, res, error)
  }
}

module.exports = {
  findCollection,
  findByIDCollection,
  queryCollection,
  create,
  update,
  remove,
  createMany,
  searchCollection,
  joinCollection

}
