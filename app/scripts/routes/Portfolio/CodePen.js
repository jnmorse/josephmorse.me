import React, { Component } from 'react';

export default function CodePen(props) {
  return (
    <section className="col-xs-12 col-md-6">
      <header>
        <h2>
          {props.title}
        </h2>
      </header>
      <div>
        <iframe
          height="268"
          scrolling="no"
          src={
            '//codepen.io/jnmorse/embed/' +
            props.id +
            '/?height=268&theme-id=0&default-tab=result'
          }
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true"
          style={{ width: '100%' }}
        >
          See the Pen{' '}
          <a href={'http://codepen.io/jnmorse/pen/' + props.id + '/'}>
            Local Weather App
          </a>{' '}
          by Joseph Morse (
          <a href="http://codepen.io/jnmorse">@jnmorse</a>) on
          <a href="http://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </section>
  );
}
