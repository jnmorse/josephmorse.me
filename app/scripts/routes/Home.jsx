import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../elements/Header.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: {
        margin: '0.2em'
      },
      style: {
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      },
      section1: {
        backgroundImage: 'url("/images/bg-1.jpg")'
      },
      section2: {
        fontWeight: 'bold',
        paddingBottom: '1em',
        height: 'auto',
        backgroundColor: '#0a0a0a',
        color: '#fafafa',
        backgroundImage: 'url("/images/bg-2.jpg")'
      },
      header: {
        color: '#fafafa',
        textShadow: '5px 5px 5px #3a3a3a,'
         + '3px 3px 3px #3a3a3a,'
         + '1px 1px 1px #3a3a3a'
      }
    };
  }

  render () {
    return (
      <div>
        <section style={Object.assign({}, this.state.style, this.state.section1)} id="home" className="container-fluid">
          <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <Header title="Joseph Morse" style={this.state.header}>
              <h2>Better Code To Cover Your Backend</h2>
            </Header>
            <div>
              <Link to="/contact" style={this.state.button} className="btn btn-primary btn-lg">Contact Me</Link>
              <Link to="/portfolio" style={this.state.button} className="btn btn-default btn-lg">See My Work</Link>
            </div>
          </div>
        </section>{/* Hero */}
      </div>
    );
  }
}
