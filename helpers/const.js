'use strict'
require('dotenv').config()
module.exports = {

  INFO_APP: {
    PORT: process.env.PORT || 3300,
    NODE_ENV: process.env.NODE_ENV || 'development'
  },

  JWT_KEY: {
    private: ''
  },

  MONGO_CREDENTIAL: {
    HOST: process.env.MONGO_HOST || 'clusterapi-yvsd3.mongodb.net',
    PORT: process.env.MONGO_PORT || '27017',
    USER: process.env.MONGO_USER || 'admin',
    PASS: process.env.MONGO_PASS || 'admin',
    DBNAME: process.env.MONGO_DB || 'test'
  }
}
