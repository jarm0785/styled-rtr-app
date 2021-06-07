/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const merge = require('webpack-merge');

process.env.NODE_ENV = 'development';
const common = require('./webpack.config.js');

module.exports = merge.smartStrategy({
  'module.rules': 'prepend',
  'module.rules.use': 'prepend',
  plugins: 'prepend',
  optimization: 'replace',
})(common, {
  output: {
    pathinfo: false
  },
  optimization: {
    nodeEnv: 'development',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    historyApiFallback: true,
    port: process.env.DEV_SERVER_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, '.storybook'),
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [],
            plugins: [
              ['babel-plugin-styled-components',
                {
                  'displayName': true,
                  'namespace': 'styled-rtr-app',
                  'minify': false,
                  'transpileTemplateLiterals': false
                }
              ],
              '@babel/plugin-syntax-dynamic-import',
              'react-refresh/babel'
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        include: [
          path.resolve('./src'),
          path.resolve(__dirname, '.storybook'),
        ],
        exclude: /node_modules/,
        use: [{
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true
          }
        }]
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        enabled: true,
        configFile: path.resolve(__dirname, './tsconfig.json')
      },
      eslint: {
        enabled: true,
        files: ['./src/**/*.{ts,tsx,js}']
      }
    }),
  ],
  mode: 'development',
});
