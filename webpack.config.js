var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var app = path.join(__dirname, 'app');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'app', 'scripts', 'main')
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']

      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      { test: /\.gif$/, loader: 'url?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url?limit=10000&mimetype=image/png' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?mimetype=application/vnd.ms-fontobject' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?mimetype=application/x-font-ttf' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?mimetype=image/svg+xml' }
    ]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'bower_components')]
  },
  postcss: function () {
    return {
      defaults: [autoprefixer],
      cleaner: [autoprefixer({ browsers: []})]
    };
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'js/[name].js'),
    new webpack.HotModuleReplacementPlugin()
  ]
};
