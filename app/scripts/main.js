import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute } from 'react-router';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import Base from './base';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio/Portfolio';

var WebFontConfig = {
  google: { families: ['Roboto:400,300,500:latin'] }
};

(function() {
  var wf = document.createElement('script');
  wf.src =
    ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

render(
  <BrowserRouter>
    <Base>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Base>
  </BrowserRouter>,
  document.querySelector('#app')
);
