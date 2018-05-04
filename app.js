'use strict'

const STATUS_CODES = require('http').STATUS_CODES
const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const swig = require('swig')
const compression = require('compression')
const routes = require('./routes/index')
const config = require('./config')

var app = express()

// app setup
app.disable('etag')
app.set('views', config.views)
app.set('view engine', 'swig')

if (app.get('env') != 'production') {
  app.set('view cache', false)
}
swig.setDefaults({autoescape: false})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(compression())
app.use(express.static(config.publicDir))

app.use(function(req, res, next) {
  res.set({
    'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    'Expires': 'Thu, 15 Apr 2000 20:00:00 GMT',
    'Pragma' : 'no-cache'
  })
  next()
})

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) { // eslint-disable-line
  res.status(err.status || 500)
  res.render('error', {
    code: res.statusCode,
    message: app.get('env') == 'production' ? STATUS_CODES[res.statusCode] : err.message,
    error: app.get('env') == 'production' ? {} : err
  })
})


module.exports = app
