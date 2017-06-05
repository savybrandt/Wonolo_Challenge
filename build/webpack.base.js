const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const config = require('../config')
const utils = require('./utils')

module.exports = {
  entry: {
    app: './src/main',
    vendor: [
      'babel-polyfill',
      'whatwg-fetch',
      'react',
      'react-dom',
      'redux',
      'redux-actions',
      'redux-promise',
      'react-redux',
      'react-router'
    ]
  },
  output: {
    filename: '[name].js',
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: config.src,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: config.src,
        loader: 'babel'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    root: config.src
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  postcss: [autoprefixer({ browsers: ['ie >= 9', 'last 2 versions'] })]
}
