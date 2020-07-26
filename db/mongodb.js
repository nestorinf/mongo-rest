'use strict'

const { MongoClient, ObjectID } = require('mongodb')
const { MONGO_CREDENTIAL } = require('../helpers/const')
const { emptyCollection, errorHandler } = require('../helpers/errorHandler')
class MongoDB {
  constructor () {
    this.client = {}
    this.connect()
  }

  uri () {
    const { USER, PASS, HOST, DBNAME } = MONGO_CREDENTIAL
    return {
      URI: `mongodb+srv://${USER}:${PASS}@${HOST}/${DBNAME}?retryWrites=true&w=majority`,
      DBNAME
    }
  }

  /**
    * Method Connected DB
   */
  async connect () {
    try {
      const { URI, DBNAME } = this.uri()
      this.client = await MongoClient.connect(URI,
        { useNewUrlParser: true, useUnifiedTopology: true, ssl: true }
        , (err, cli) => {
          if (err) errorHandler(err)
          console.log('Connected DB!!')
          this.client = { connected: true, db: cli.db(DBNAME) }
        })
    } catch (error) {
      console.error(error)
      this.client = { connected: false }
    }
    return this.client
  }

  async find (collection) {
    try {
      const { db } = this.client
      const result = await db.collection(`${collection}`).find({}).toArray()
      emptyCollection(result)
      return result
    } catch (error) {
      errorHandler(error)
    }
  }

  async findByID (collection, id) {
    try {
      const { db } = this.client
      const result = await db.collection(`${collection}`).findOne({ _id: ObjectID(id) })
      emptyCollection(result)
      return result
    } catch (error) {
      errorHandler(error)
    }
  }

  async query (collection, query) {
    try {
      const { db } = this.client
      const result = await db.collection(`${collection}`).find(query).toArray()
      emptyCollection(result)
      return result
    } catch (error) {
      errorHandler(error)
    }
  }

  async findIn(collection,query) {
    const {field, values } = query
    let objectQuery = {}
    objectQuery[field] = { $in:values }
    try {
      const { db } = this.client
      const result = await db.collection(`${collection}`).find(objectQuery).toArray()
      emptyCollection(result)
      return result
    } catch (error) {
      console.log(error)
      errorHandler(error)
    }
  }

  async create (collection, data) {
    try {
      const { db } = this.client
      const result = await db.collection(`${collection}`).insertOne(data)
      return result
    } catch (error) {
      errorHandler(error)
    }
  }

  async update (collection, data) {
    try {
      const { db } = this.client
      const { set, query } = data
      const newValues = { $set: set }
      const result = await db.collection(`${collection}`).updateOne(query, newValues)
      return result
    } catch (error) {
      errorHandler(error)
    }
  }

  async delete (collection, data) {
    try {
      const { db } = this.client
      const result = await db.collection(`${collection}`).deleteOne(data)
      return result
    } catch (error) {
      errorHandler(error)
    }
  }

  async createMany (collection, data) {
    try {
      const { db } = this.client
      const result = await db.collection(`${collection}`).insertMany(data)
      return result
    } catch (error) {
      errorHandler(error)
    }
  }

  async search (collection, keyword) {
    try {
      const { db } = this.client
      const search = { $text: { $search: keyword } }
      const result = await db.collection(`${collection}`).find(search).toArray()
      return result
    } catch (error) {
      errorHandler(error)
    }
  }
  
  async join(collection,data) {
    try {
      const { db } = this.client
      const lookup = { $lookup:data }
      const result = await db.collection(`${collection}`).aggregate([lookup]).toArray()
      return result
    } catch (error) {
      errorHandler(error)
    }
  }
}

module.exports = MongoDB
