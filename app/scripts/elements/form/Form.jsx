import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <form encType={this.props.type} action={this.props.action} method={this.props.method}>{this.props.children}</form>
    );
  }
}

Form.propTypes = {
  method: PropTypes.string,
  action: PropTypes.string,
  type: PropTypes.string
};

Form.defaultProps = {
  method: 'get',
  action: null,
  type: null
};
