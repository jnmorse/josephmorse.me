import React, { Component } from 'react';

export default class TextField extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div key={this.props.id} className="form-group has-success">
        <label className="control-label" htmlFor={this.props.id}><span>{this.props.label}</span></label>
        <input className={['form-control'].join(' ')}
          type="email"
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeHolder}
          required={this.props.required} />
      </div>
    );
  }
}

TextField.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  placeHolder: React.PropTypes.string,
  required: React.PropTypes.bool
};

TextField.defaultProps = {
  placeHolder: null,
  required: false
};
