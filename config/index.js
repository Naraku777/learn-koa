// config/index.js

var path = require('path')
var _ = require('lodash')

var base = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname, '/..'),
  prot: process.env.PORT || 3001,
  // MongoDB
  mongo: {
    option: {
      useMongoClient: true,
      autoReconnect: true
    }
  },
  session: {
    secret: 'ocean-secret'
  }
}

// 根据环境合并配置
const config = _.merge(base, require('./' + process.env.NODE_ENV + '.js') || {})

module.exports = config