/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config({ path: './.env' });

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    symlinks: false,
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[fullhash].js',
    chunkFilename: '[id].[chunkhash].js',
    libraryTarget: 'umd',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1000 * 600,
      cacheGroups: {
        defaultVendors: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          enforce: true,
        },
        'modules-async': {
          chunks: 'async',
          name: 'modules-async',
          test: /node_modules/,
          enforce: true
        },
        common: {
          chunks: 'async',
          name: 'common',
          test: /[\\/]src[\\/]common[\\/]/,
          enforce: true
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: false
            }
          }
        ]
      },
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
              importLoaders: 2,
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              url: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ],
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        include: [
          path.resolve('./src'),
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: '[name]__[contenthash].[ext]',
              outputPath: './images',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DotenvWebpack({ path: './.env' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackHarddiskPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      inject: 'body',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
  ],
};
