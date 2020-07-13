const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {INFO_APP } = require('./helpers/const')
const helmet = require('helmet')
const cors = require('cors')
const MongoDB = require('./db/mongodb')
const mongo   = new MongoDB()

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

const routes = require('./routes')
app.use('/api',routes)


app.set('dbmongo',mongo)

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

