// config/koa.js

const responseTime = require('koa-response-time')
const logger = require('koa-logger')
const cors = require('kcors')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const passport = require('koa-passport')
const compress = require('koa-compress')
const config = require('../config')

module.exports = function (app) {
  if (app.env === 'development') {
    app.use(responseTime)
    app.use(logger)
  }
  app.use(cors({
    credentials: true
  }))
  app.use(bodyParser())
  app.use(json())
  app.keys = [config.session.secret]
  app.use(passport.initialize())
  app.use(compress())
}