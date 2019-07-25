import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'

import './styles.css'

import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
