// config/prod.js

const MONGO_HOST = '127.0.0.1'
const MONGO_PORT = '27017'
const MONGO_AUTH_SOURCE = '?authSource=admin'
const MONGO_USERNAME = 'admin'
const MONGO_PWD = 'admin2017'

// 开发环境配置
module.exports = {
  mongo: {
    uriPrefix: `mongodb://${MONGO_USERNAME}:${MONGO_PWD}@{MONGO_HOST}:${MONGO_PORT}/`,
    uriSuffix: `${MONGO_AUTH_SOURCE}`
  },
  session: {
    cookie: {
      domain: '/',
      maxAge: 1000 * 60 * 24 * 30
    }
  }
}