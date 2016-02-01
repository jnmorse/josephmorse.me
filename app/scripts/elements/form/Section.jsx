import React, { Component } from 'react';

export default class FormSection extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section>
        <header>
          <h2>{this.props.title}</h2>
        </header>

        {this.props.children}
      </section>
    );
  }
}

FormSection.propTypes = {
  title: React.PropTypes.string.isRequired
};
