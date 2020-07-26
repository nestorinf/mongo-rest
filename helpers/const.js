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
    HOST: process.env.MONGO_HOST || '',
    PORT: process.env.MONGO_PORT || '',
    USER: process.env.MONGO_USER || '',
    PASS: process.env.MONGO_PASS || '',
    DBNAME: process.env.MONGO_DB || ''
  }
}
