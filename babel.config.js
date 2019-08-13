const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['last 2 versions', 'not dead', 'not < 2%', 'not ie 11'],
        useBuiltIns: 'entry'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }
  }
}

module.exports = function(api) {
  api.cache(true)

  return config
}
