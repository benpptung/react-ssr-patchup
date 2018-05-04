'use strict'

const join = require('path').join

var production = process.env.NODE_ENV
  && process.env.NODE_ENV.toLowerCase() == 'production'


/*******************
 * Web Server Config
 *******************/

exports.views = production
  ? join(__dirname, '..', 'dist', 'views') : join(__dirname, '..', 'views')

exports.publicDir = production
  ? join(__dirname, '..', 'dist', 'public') : join(__dirname, '..', 'public')
