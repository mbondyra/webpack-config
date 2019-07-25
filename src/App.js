import React from 'react'
import { hot } from 'react-hot-loader'
import WebFont from 'webfontloader'
const Warning = React.lazy(() => import('./warning'))
import Button from './components/Button'
class App extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    })
  }

  render() {
    if (this.state.count > 20) {
      throw new Error('BOOM')
    }
    return (
      <main>
        <Button>Hello!</Button>
        <h1>Hello world</h1>
        <h2 className={this.state.count > 10 ? 'warning' : null}>
          Count: {this.state.count}
        </h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        {this.state.count > 10 && (
          <React.Suspense fallback={<div>o</div>}>
            <Warning />
          </React.Suspense>
        )}
      </main>
    )
  }
}

export default hot(module)(App)
