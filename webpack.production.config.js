const webpack = require('webpack');

module.exports = {
  entry: {
    app: `${__dirname}/app/scripts/main`
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ]
};
