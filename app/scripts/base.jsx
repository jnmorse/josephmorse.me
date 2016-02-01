import React, { createClass } from 'react';
import Header from './elements/Header.jsx';
import Footer from './elements/Footer.jsx';
import Copyright from './components/Copyright.jsx';
import Person from './models/Person';
import { Link } from 'react-router';

var Base = React.createClass({
  render: function () {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">JosephMorse</Link>
            </div>
            <nav className="collapse navbar-collapse" id="main-nav">
              <header className="sr-only">
                <h4>Site Nav</h4>
              </header>
              <ul className="nav navbar-nav">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div>{this.props.children}</div>
        <Footer>
          <Copyright year={[2016, 2017]} holder={new Person('Joseph', 'Morse')} />
        </Footer>
      </div>
    );
  }
});

module.exports = Base;
