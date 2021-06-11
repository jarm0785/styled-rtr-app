/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

process.env.NODE_ENV = 'production';
const common = require('./webpack.config.js');

module.exports = merge.smartStrategy({
  'module.rules': 'prepend',
  'optimization': 'merge',
  plugins: 'prepend',
})(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      })
    ],
    usedExports: true,
    runtimeChunk: {
      name: 'manifest',
    }
  },
  module: {
    rules: [
      {
        test: /\.((tsx?)|(js))$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 'modules': false }],
              '@babel/preset-react'
            ],
            plugins: [
              ['babel-plugin-styled-components',
                {
                  'namespace': 'rtr-app',
                  'displayName': false,
                  'minify': true,
                  'pure': true
                }
              ],
              '@babel/plugin-syntax-dynamic-import',
            ]
          }
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        include: [
          path.resolve('./src'),
        ],
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: false,
              experimentalWatchApi: true,
              happyPackMode: true,
            },
          },
        ],
      }
    ]
  },
  plugins: []
});
