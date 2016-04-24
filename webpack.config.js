var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'client')
    ]
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
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
    new webpack.HotModuleReplacementPlugin()
  ]
}
