/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const DotenvWebpack = require('dotenv-webpack');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

require('dotenv').config({ path: './.env' });

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.min.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      })
    ]

  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: [/\.woff$/, /\.woff2$/, /\.ttf$/, /\.eot$/, /\.otf$/],
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]__[contenthash].[ext]',
              outputPath: './fonts',
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]__[contenthash].[ext]',
              outputPath: './images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new DotenvWebpack({ path: './.env' }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ],
};
