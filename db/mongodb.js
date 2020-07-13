"use strict"

const {MongoClient, ObjectID}  = require('mongodb')

class MongoDB {

    constructor(data) {
        // super()
        this.data = data
        this.client = this.connect()
    }

    uri() {
        const {USER, PASS, HOST, DBNAME} = this.data 
        return  `mongodb+srv://${USER}:${PASS}@${HOST}/${DBNAME}?retryWrites=true&w=majority`
    }

   /**
    * Method Connected DB 
   */
   async connect() {
       let connection = null
        try {
          const uri = this.uri()
          connection = await  MongoClient.connect(uri, 
            { useNewUrlParser: true, useUnifiedTopology: true, ssl: true }
            ,(err,cli) => {
                console.log('Connected DB!!')
                connection = cli.db()
          })
          
        } catch (error) {
            console.error(error)
        }
        return connection
       
    }

    async find() {
        try {
            const result = await this.client.collection('users').find({}).toArray()
            console.log(result)
        } catch (error) {
            throw new Error(error)
        }
    }

} 

module.exports = MongoDB