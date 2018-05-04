'use strict'

const express = require('express')
const router = express.Router()
const ssr = require('../views/components/ssr.min')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const inject = require('inject-css')

/* GET home page. */
router.get('/', function(req, res) {

  let ssrHtml = ReactDOMServer.renderToString(
    React.createElement(ssr.App)
  )
  let ssrCss = inject.getCssAndResetSess().join('')

  res.render('index', {
    title: 'React SSR patchup',
    ssrHtml,
    ssrCss
  })
})

module.exports = router
