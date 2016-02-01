import React, { Component } from 'react';

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
  method: React.PropTypes.string,
  action: React.PropTypes.string,
  type: React.PropTypes.string
};

Form.defaultProps = {
  method: 'get',
  action: null,
  type: null
};
