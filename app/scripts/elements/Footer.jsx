/**
 * Component of josephmorse.me
 *
 * @author Joseph Morse <tamed.lionheart@gmail.com>
 * @version 0.1.0
 * @license https://github.com/jnmorse/react-webpack/blob/master/LICENSE MIT
 */

import React from 'react';

var Footer = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function () {
    return (
      <footer className="container-fluid" style={{marginTop: 10}}>{this.props.children}</footer>
    );
  }
});

module.exports = Footer;
