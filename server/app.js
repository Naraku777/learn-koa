// server/app.js

// 设置默认环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const Koa = require('koa')
const app = new Koa()
const config = require('../config')
