'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const App = require('../client/app')

ReactDOM.hydrate(
  <App />,
  document.getElementById('desk'),
  removeSSRCss
)

function removeSSRCss() {
  var el = document.getElementById('ssrCss')
  if (!el) return
  el.parentNode.removeChild(el)
}
