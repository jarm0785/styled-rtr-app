/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const path = require('path');

process.env.NODE_ENV = 'production';
const common = require('./webpack.config.js');

module.exports = merge.smartStrategy({
  'module.rules': 'prepend',
  'optimization': 'replace',
  plugins: 'prepend',
})(common, {
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include: [
          path.resolve('./src'),
        ],
        exclude: /node_modules/,
        use: [{
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true
          }
        }]
      },
    ]
  },
  plugins: []
});
