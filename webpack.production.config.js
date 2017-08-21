var webpack = require("webpack");

module.exports = {
  entry: {
    app: `${__dirname}/app/scripts/main`
  },
  output: {
    path: __dirname,
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js"
    })
  ]
};
