import React, { Component } from 'react'
import { render as Render } from 'react-dom'

class Index extends Component {
  render() {
    return(
      <div>
        <header className="page-header">
          <h1>Test</h1>
        </header>
      </div>
    )
  }
}

Render(
  <Index/>,
  document.querySelector('#app')
)
