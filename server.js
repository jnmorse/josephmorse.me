var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var sass = require('node-sass-middleware');

var app = express();
var router = express.Router();
var compiler = webpack(config);

var isDevelopmentEnv = (process.env.NODE_ENV !== 'production');

app.use(sass({
  src: path.join(__dirname, 'app', 'styles'),
  dest: path.join(__dirname, 'dist', 'css'),
  response: true,
  debug: isDevelopmentEnv,
  outputStyle: 'compressed',
  includePaths: [path.join(__dirname, 'node_modules')],
  prefix: '/css'
}));

app.use('/css', express.static(path.join(__dirname, 'dist', 'css')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap-sass')));
app.use('/font-awesome', express.static(path.join(__dirname, 'node_modules', 'font-awesome')));

if (isDevelopmentEnv) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.use(express.static(path.join(__dirname, 'app')));

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'app/index.html'));
  });
}

else {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use('/images', express.static(path.join(__dirname, 'app', 'images')));

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'app/index.html'));
  });
}

app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
