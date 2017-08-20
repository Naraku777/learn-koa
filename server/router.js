// server/router.js

const router = require('koa-router')()

const activity = require('./activity/routes')

router.use('/api/activity', activity.routes(), activity.allowedMethods())
router.get('/', (ctx) => {
  ctx.body = 'ok'
})

module.exports = router