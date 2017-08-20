// server/util/log.js

const path = require('path')
const bunyan = require('bunyan')
const config = require('../../config')

const logger = bunyan.createLogger({
  name: 'ocean',
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  },
  streams: [{
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'trace',
      stream: process.stdout
    },
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      type: 'rotating-file',
      level: 'error',
      path: path.join(config.root, 'logs' + config.env + '-' + 'err.log'),
      period: '1d',
      count: 7
    }
  ]
})

module.exports = logger