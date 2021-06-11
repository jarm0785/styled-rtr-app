# React/Typescript/Redux Boilerplate App Template with Styled Components
 
1. [Technology stack](#technology)
2. [Instalation steps](#instalation) 
3. [Usefull Information](#scripts)
4. [Contributing](#contribution)

You can see a demo of the what's included [here](https://styled-rtr-app.pages.dev/).

<a name="tech stack" />

## What technology stack do you get out of the box?

- [React v.17](https://pl.reactjs.org/)
  React library with some sample hooks you can use.

- [Typescript v.4.3](https://www.typescriptlang.org/)
  All the application uses typescript, and the included dependencies have installed their corresponding types.

- [Styled Components](https://styled-components.com/)
  The application includes a basic layout, a theming system and some sample components that where created using styled components.
  Sample components include Buttons, Typography elements and a reusable card component.
  The package also includes two custom themes (default and dark) and a toggle to switch between theme.
  Theming state is handled by redux.

- [Styled System](https://styled-system.com/api)
  Styled System is a collection of utility functions that add style props to your React components and allows you to control styles based on a global theme object with typographic scales, colors, and layout properties.

- [Storybook](https://storybook.js.org/)
  This tool lets you create atomic elements in isolation, without the need of external data.
  Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app.
  A Theme Handle is included to see components both in their default and dark variants.

- [Redux-Toolkit](https://redux-toolkit.js.org/)
  Redux toolkit is used for state management. The template includes sample reducers and selectors you can reuse and scale in your future app.
  Async thunk actions are also pre-configured to fetch data and populate the store.

- [Axios](https://redux-toolkit.js.org/)
  an Axios http server is preconfigured and ready to use. An example is included and integrated with redux-toolkit to fetch some sample data.

- [React Router](https://reactrouter.com/)
  A widget router is included with two sample routes and their corresponding components. Components are lazy loaded for performance.

- [Jest](https://jestjs.io/)
  Jest is preconfigured and a sample test is included.

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  React testing library and the jest-dom extension are integrated with jest to test dom elements.

- [Webpack 5](https://webpack.js.org/)
  The application is use as the module bundler. Both settings for prod and dev environmens are included.
  A devServer is also configure with react-refresh pre-configured.

- [Husky](https://github.com/typicode/husky)
  Husky checks your code for style and testing errors before you push a new commit to the repository, which potentially can prevent build errors.

- [ESLint](https://eslint.org/)
  Eslint is preconfigured and extended with the recommended rules for react, typescript and scss modules.

- [React Refresh](https://github.com/facebook/react/issues/16604#issuecomment-528663101)
  This package implements the wiring necessary to integrate Fast Refresh into bundlers. Fast Refresh is a feature that lets you edit React components in a running application without losing their state. It is similar to an old feature known as "hot reloading", but Fast Refresh is more reliable and officially supported by React.

- [Loadable Components](https://loadable-components.com/)
  Loadable components are used for code splitting. This package was chosen as it supports server side rendering.

<a name="instalation" />

## Instalation steps

1. Fork this repository and clone it to your local machine. Assing your project's name to the forked repository.

You can also install using and npx script (Not yet ready. Coming soon)
`npx create-styled-rtr-app`

2. Install dependencies.

`npm install`

3. Run local environment.

`npm start`

<a name="information" />

## Other usefull information

### Available scripts

`npm start` - run development server with hot reload mode,

`npm build` - build distributon package,

`npm run lint` - run lints,

`npm run lint:code` - run lint for typescript / javascript files,

`npm run lint:style` - run lint for style files,

`npm test` - run tests,

`npm run test:watch` - run tests with watch mode,

`npm run test:coverage` - run tests and generate coverage report.

<a name="information" />

## Contributing

Feel free to add new features  that you think would be usefull for other users to have. Also feel free to report any bugs or open a pull request with fixes.


### Submitting code

Any code change should be submitted as a pull request. The description should explain what the code does and give steps to execute it. The pull request should also contain tests (if applicable) and follow the same code styling and structure used throught the application.
