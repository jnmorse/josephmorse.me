import React, { Component } from 'react';

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
  type: React.PropTypes.string,
  children: React.PropTypes.element.isRequired,
  clickHandler: React.PropTypes.func
};

Button.defaultProps = {
  type: 'button'
};
