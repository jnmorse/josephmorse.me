const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: __dirname + '/app/scripts/main.js'
  },
  output: {
    filename: 'js/[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          filename: '[name].bundle.js'
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
