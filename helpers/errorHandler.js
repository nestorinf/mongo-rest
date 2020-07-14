'use strict'

const emptyCollection = (collection) => {
  if (Object.keys(collection).length === 0) {
    throw new Error('no se encontraron registros')
  }
  return true
}

const errorHandler = (err) => {
  throw new Error(err)
}

module.exports = {
  emptyCollection,
  errorHandler
}
