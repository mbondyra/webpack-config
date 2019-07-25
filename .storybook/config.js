import { configure } from '@storybook/react'

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
function loadStories() {
  const req = require.context('../src/components/', true, /\.example\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
