// server/router.js

const router = require('koa-router')()

const activity = require('./activity/routes')

router.use('/api/activity', activity.routes(), activity.allowedMethods())

module.exports = router