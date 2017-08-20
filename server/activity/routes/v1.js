// server/activity/routes/v1.js

const router = require('koa-router')()

const home = require('../controllers/home')

router.get('/index', home.index)

module.exports = router