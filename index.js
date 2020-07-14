const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { INFO_APP } = require('./helpers/const')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const MongoDB = require('./db/mongodb')
const mongo = new MongoDB()

app.use(bodyParser.json())
app.use(compression());
app.use(cors({
  "methods": "GET,PUT,POST,DELETE",
}))
app.use(helmet())

const routes = require('./routes')

app.use('/api', routes)
app.use('/',(req,res)=>{
  res.status(200).send({message:"Welcome API REST Mongo DB"})
})

app.set('dbmongo', mongo)

const initService = async () => {
  try {
    await app.listen(INFO_APP.PORT, () => console.log('Service Mongo REST On PORT ' + INFO_APP.PORT))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

// Init Server
initService()
