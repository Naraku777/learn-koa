// server/app.js

// 设置默认环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const Koa = require('koa')

const app = new Koa()
const config = require('../config')
const logger = require('./util/log')
const errorHandleMiddle = require('./util/err')
const router = require('./router')

// log 记录
// this.logger.error('msg')
app.use(async(ctx, next) => {
  ctx.logger = logger
  await next()
})

// 错误处理
app.use(errorHandleMiddle())

// 统一设置中间件
require('../config/koa')(app)

// 路由
app.use(router.routes()).use(router.allowedMethods())

// 错误监听
app.on('error', (err, ctx) => {
  if (process.env.NODE_ENV != 'test') {
    console.log('Error: ', err)
  }
})

module.exports = app