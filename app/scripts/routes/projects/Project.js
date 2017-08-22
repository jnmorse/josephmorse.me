import React from 'react';
import PropTypes from 'prop-types';

const Project = props =>
  <section>
    <header>
      <h1>
        {props.title}
      </h1>
      <footer>
        <a href={props.uri}>
          {props.title}
        </a>
      </footer>
    </header>
  </section>;

Project.propTypes = {
  title: PropTypes.string,
  uri: PropTypes.string
};

export default Project;
