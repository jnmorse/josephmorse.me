import React, { Component } from 'react';
import Project from './Project';
import Header from '../../elements/Header.jsx';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: {
        base: {
          marginTop: 40
        }
      }
    };
  }

  render() {
    var styles = this.state.styles;
    return (
      <div style={styles.base} className="container-fluid">
        <Header title="Projects" />

        <Project title="TwitchTv" uri={'/twitchtv'} />
      </div>
    );
  }
}
