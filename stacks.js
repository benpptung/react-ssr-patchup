'use strict'

module.exports = [
  {
    name: 'base/site',
    nature: 'js',
    files: [
      'inherits', 'inject-css', 'prop-types', 'react', 'react-dom'
    ],
    browserify: {
      exposes: '*'
    }
  },
  {
    name: 'ssr',
    nature: 'jhtml',
    files: [
      'rendering/ssr.js'
    ],
    watch: [ 'client/**/*.*' ],
    browserify: {
      standalone: 'ssr',
      externals: [
        'react',
        'react-dom',
        'inject-css'
      ]
    }
  },
  {
    name: 'rendering',
    nature: 'js',
    files: [
      'rendering/index.js'
    ],
    watch: [ 'client/app/**/*.*'],
    browserify: {
      externals: [
        'inherits', 'inject-css', 'prop-types', 'react', 'react-dom'
      ]
    }
  }
]
