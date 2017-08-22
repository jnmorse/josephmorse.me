/**
 * Element of josephmorse.me
 *
 * @author Joseph Morse <tamed.lionheart@gmail.com>
 * @version 0.1.0
 * @license https://github.com/jnmorse/react-webpack/blob/master/LICENSE MIT
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static get propTypes() {
    return {
      children: PropTypes.element,
      title: PropTypes.string.isRequired,
      style: PropTypes.object,
      level: PropTypes.number
    };
  }

  defaultChild() {
    return (
      <h1>
        {this.props.title}
      </h1>
    );
  }

  static defaultProps() {
    return {
      children: this.defaultChild
    };
  }

  render() {
    return (
      <header className="row" style={this.props.style}>
        <h1>
          {this.props.title}
        </h1>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
