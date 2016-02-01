/**
 * Element of josephmorse.me
 *
 * @author Joseph Morse <tamed.lionheart@gmail.com>
 * @version 0.1.0
 * @license https://github.com/jnmorse/react-webpack/blob/master/LICENSE MIT
 */

import React from 'react';

/**
 * Header Component
 */
var Header = React.createClass({
  /**
   * Define Prop Types
   * @var propTypes
   * @type {Object}
   */
  propTypes: {
    children: React.PropTypes.element,
    title: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    level: React.PropTypes.number
  },

  /**
   * Define the component defaults
   * @return {object}
   */
  getDefaultProps: function () {
    return {
      children: this.defaultChild
    };
  },

  /**
   * Default Render Function
   * @return {jsx} Default Header Layout
   */
  defaultChild: function () {
    return (
      <h1>{this.props.title}</h1>
    );
  },

  render: function () {
    return (
      <header className="row" style={this.props.style}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </header>
    );
  }
});

module.exports = Header;
