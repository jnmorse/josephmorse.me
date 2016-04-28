import React, { Component } from 'react'

export default class Base extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'something'
    }
  }

  render() {
    return (
      <div className='base-component'>
        <header>
          <h1>
            <span>Joseph Morse </span>
            <small>Web Development</small>
          </h1>
          <ul className='social-links'>
            <li>
              <a target='_blank' href='https://github.com/jnmorse'>
                <i className='fa fa-fw fa-2x fa-github'/>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://twitter.com/tamed_lionheart'>
                <i className='fa fa-fw fa-2x fa-twitter'/>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}
