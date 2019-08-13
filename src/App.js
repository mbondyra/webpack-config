import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader'
import WebFont from 'webfontloader'
import Header from './Header'
import Listing from './Listing'

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    })
  }, [])
  return (
    <React.Fragment>
      <Header />
      <Listing />
    </React.Fragment>
  )
}

export default hot(module)(App)
