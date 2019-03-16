import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  title: PropTypes.string.isRequired
};
