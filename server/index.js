const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('../webpack.config')

require('dotenv').config()

const app = express()
app.disable('x-powered-by')

const dev = process.env.NODE_ENV === 'development'

if (dev) {
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../index.html'))

    next()
  })
}

app.use(express.static(path.resolve(__dirname, '../public')))
app.use(express.static(path.resolve(__dirname, '../bower_components')))

app.get('*', function(req, res) {
  if (dev === false) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
  }
})

module.exports = app
