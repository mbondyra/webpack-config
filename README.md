# SKELETON

## My modern-tooling webpack configuration with a lambda on netlify service prepared

The frontend is built on my custom setup of Webpack,
the backend is netlify lambda function (https://www.netlify.com/docs/functions/)

## Development

Clone the repository

```
git clone git@github.com:mbondyra/webpack-config
```

### Local

To install:

```
cd webpack-config
yarn
```

To develop:

```bash
yarn dev # you can check frontend on http://localhost:9090 and backend on http://localhost:9000/.netlify/functions/homecards
```

To test:

```bash
yarn test # there are only jest and enzyme tests implemented to couple of components
```

To run storybook:

```bash
yarn storybook
```

To lint and check accessibility:

```bash
yarn lint
```

## Deployment

Once you push your changes to github, the app will be automatically deployed here:
https://goofy-jepsen-6e83af.netlify.com/
