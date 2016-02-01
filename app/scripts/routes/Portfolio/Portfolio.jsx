import React, { Component } from 'react';
import Header from '../../elements/Header.jsx';
import CodePen from './CodePen';

export default class Portfolio extends Component {
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

  render () {
    var styles = this.state.styles;
    return (
      <div style={styles.base} className="container-fluid">
        <Header title="Portfolio" />

        <CodePen id="bEGZyG" title="Calculator" />
        <CodePen id="GoJmQq" title="Local Weather" />
        <CodePen id="ZQEGWw" title="Random Computer Quotes" />
        <CodePen id="KVpoEO" title="Pomodoro Clock" />
        <CodePen id="pgpwaP" title="Twitch Streamers" />
        <CodePen id="adWdbw" title="Camper News" />
        <CodePen id="LGLMor" title="WikiSearch" />
      </div>
    );
  }
}
