import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Base from './base.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Portfolio from './routes/Portfolio/Portfolio.jsx';

var WebFontConfig = {
  google: { families: [ 'Roboto:400,300,500:latin' ] }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

render((
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.querySelector('#app'));
