import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { createGlobalStyle } from 'styled-components'

import DefaultErrorBoundary from './DefaultErrorBoundary'
import App from './App'

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    font-family: 'Luckiest Guy', sans-serif;
    font-weight: 300;
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
    transition: text-decoration 0.4s;
  }
  * {
    font-family: 'Luckiest Guy', sans-serif;
    box-sizing: border-box;
  }
`

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <GlobalStyle />
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
