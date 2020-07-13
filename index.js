const express = require('express')
const { INFO_APP } = require('./helpers/const')
const app = express()
const { MONGO_CREDENTIAL } = require('./helpers/const')

const MongoDB = require('./db/mongodb')
const mongo = new MongoDB(MONGO_CREDENTIAL)
const initService = async () => {
    try {
     
        await app.listen(INFO_APP.PORT,() => console.log('Service Mongo REST On PORT '+INFO_APP.PORT))
        
        
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

// Init Server
initService()

mongo.find()