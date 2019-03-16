import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <button onClick={this.props.clickHandler} type={this.props.type} className="btn btn-primary">{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element.isRequired,
  clickHandler: PropTypes.func
};

Button.defaultProps = {
  type: 'button'
};
