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
        <section id="about" className="container-fluid" style={Object.assign({}, this.state.style, this.state.section2)}>
          <Header title="About Me" />

          <img style={{
            borderRadius: '50%',
            border: '5px solid #cacaca',
            margin: '2em',
            marginRight: '7em',
            width: '14em',
            float: 'right'
          }} src="/images/me.jpg" alt="Joseph Morse"/>

          <p style={{backgroundColor: 'rgba(30, 30, 30, 0.7)',padding: '1.5em'}}>
            I am a largely self taught Web Developer, based in New Hampshire, USA.
            I was interested in programming since I was in kindergarden and the
            first program I "wrote" (largely copied out of a book) on an old
            Commodore 64.
          </p>

          <section className="container-fluid" style={{backgroundColor: 'rgba(30, 30, 30, 0.7)',padding: '1.5em'}}>
            <header>
              <h2>Hobbies & Interests</h2>
            </header>
            <p>
              I enjoy Anime, Working with computers (building, Linux operating
              systems), and learning as many new things as I can with comptuers.
            </p>

            <p>
              At some point when I have more time and motiviation to do so I Would
              also like to learn to read, write, and speak Japanese.
            </p>
          </section>

          <section className="container-fluid clearfix" style={{backgroundColor: 'rgba(30, 30, 30, 0.7)',padding: '1.5em'}}>
            <header>
              <h2>Tools & Languages</h2>
            </header>

            <section className="col-sm-6">
              <header>
                <h3>Experienced / Familiar</h3>
              </header>
              <ul>
                <li>PHP 5.6</li>
                <li>JavaScript | jQuery</li>
                <li>HTML5</li>
                <li>CSS 3 / Sass</li>
                <li>Responsive Web Design</li>
                <li>MySql</li>
                <li>Git | Github</li>
                <li>Gulp</li>
                <li>Linux | (Ubuntu / Arch)</li>
              </ul>
            </section>{/* Experienced */}

            <section className="col-sm-6">
              <header>
                <h3>Would Like To Learn</h3>
              </header>

              <ul>
                <li>Go</li>
                <li>Python</li>
                <li>Swift</li>
              </ul>
            </section>{/* To Learn */}

            <section className="col-sm-6">
              <header>
                <h3>Learning</h3>
              </header>
              <ul>
                <li>React JS</li>
                <li>Nodejs</li>
                <li>Mongodb</li>
                <li>D3</li>
                <li>Webpack</li>
                <li>API First Web Development</li>
              </ul>
            </section>{/* Learning */}
          </section>
        </section>
      </div>
    );
  }
}
