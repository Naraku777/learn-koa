// bin/www.js

const app = require('../server/app')
const config = require('../config')

// 启动服务
app.listen(config.port, () => {
  console.log('Koa server listening on %d, in %s mode', config.port, app.env)
})