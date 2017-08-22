const path = require('path');
const express = require('express');
const sass = require('node-sass-middleware');
const bodyParser = require('body-parser');
const helper = require('sendgrid').mail;

const app = express();
const keys = require('./config');
const sg = require('sendgrid')(keys.sendgridKey);

const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

app.use(
  sass({
    src: path.join(__dirname, 'app', 'styles'),
    dest: path.join(__dirname, 'dist', 'css'),
    response: true,
    debug: isDevelopmentEnv,
    outputStyle: 'compressed',
    includePaths: [path.join(__dirname, 'node_modules')],
    prefix: '/css'
  })
);

app.use(
  '/bootstrap',
  express.static(path.join(__dirname, 'node_modules', 'bootstrap-sass'))
);
app.use(
  '/font-awesome',
  express.static(path.join(__dirname, 'node_modules', 'font-awesome'))
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/css', express.static(path.join(__dirname, 'dist', 'css')));

app.post('/mail', (req, res) => {
  const fromEmail = new helper.Email(req.body.from, req.body.name);
  const toEmail = new helper.Email('joseph@josephmorse.me', 'Joseph Morse');
  const content = new helper.Content('text/plain', req.body.message);
  const mail = new helper.Mail(fromEmail, req.body.subject, toEmail, content);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, (error, response) => {
    if (error) {
      res.send({ error: 'Problem Sending' });
      console.error(error, req.body);
      return;
    }

    res.send({ sent: 'okay', ...response });
  });
});

app.use(
  '/dist',
  express.static(`${__dirname}/projects/freecodecamp-twitchtv/dist`)
);

app.get('/twitchtv', (req, res) => {
  res.sendFile(`${__dirname}/projects/freecodecamp-twitchtv/index.html`);
});

if (isDevelopmentEnv) {
  const webpack = require('webpack');
  const config = require('./webpack.config');

  const compiler = webpack(config);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })
  );

  app.use(express.static(path.join(__dirname, 'app')));

  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/app/index.html`);
  });
} else {
  app.use('/js', express.static(`${__dirname}/dist/js`));
  app.use('/images', express.static(path.join(__dirname, 'app', 'images')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/index.html'));
  });
}

app.listen(3000, '0.0.0.0', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
