var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var homeRouter = require('./routes/home.js')
var usersRouter = require('./routes/users.js')

var app = express()

// 端口
const port = 80

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')), { maxAge: 3600 * 1000 })

app.use('/home', homeRouter)
app.use('/users', usersRouter)

// 捕获 404 错误并前往 错误处理
app.use(function (req, res, next) {
  next(createError(404))
})

// 错误处理
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.write('code: ' + err.status)
  res.end()
})

// 监听端口
app.listen(port, () => {
  console.log('服务已启动:\nhttp://localhost:%s', port)
})

module.exports = app
