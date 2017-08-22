const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      `${__dirname}/app/scripts/main`
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/js/'
  },
  devtool: 'eval-source-map',
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
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
