var webpack = require('webpack');
var path = require('path');

var app = path.join(__dirname, 'app');

module.exports = {
  entry: {
    app: path.join(__dirname, 'app', 'scripts', 'main')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']

      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'js/[name].js'),
  ]
};
