'use strict'

/**
 * Module Dependencies
 */
const React = require('react')
const is = require('prop-types')
const inherits = require('inherits')
const inject = require('inject-css')
const classhash = require('classhash')('10d1c19c')

/**
 * inherits and expose module
 */
inject(require('./styl.scss'))
inherits(App, React.Component)
module.exports = App
App.propTypes = {
  className: is.string
}
const prototype = App.prototype

/**
 * @constructor
 */
function App(props) {
  React.Component.call(this, props)
  this.state = {
    inBrowser: false
  }

  this.classes = classhash({
    'container': props.className
  })

  this.styles = Object.defineProperties(this, {
    'container': {
      get: _=> {
        return this.state.inBrowser
        ? { height: window.innerHeight * 0.5}
        : { height: 300}
      }
    }
  })
}

/**
 * @public
 * @return {ReactElement}
 */
prototype.render = function() {

  var c = this.classes
  var s = this.styles

  return <div className={c['container']} style={s['container']}>
    <p>react 2-pass rendering to update style</p>
  </div>
}

prototype.componentDidMount = function() {
  if (!this.state.inBrowser && typeof window === 'object' ) {
    this.setState({inBrowser: true})
  }
}

if (process.env.NODE_ENV !== 'production') {
  App.displayName = 'App'
}
