const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AnnotatePlugin = require('babel-plugin-angularjs-annotate');
const ObjectRestSpreadPlugin = require('@babel/plugin-proposal-object-rest-spread');

const config = {
  optimization: {
    minimize: false //TODO: Fix minification breaking angular DI
  },
  entry: [
    './src/app/app.module.js',
    './src/assets/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [new AnnotatePlugin()]
          }
        }
      },
      {
        test: /\.(css$|scss$)/,
        use: ExtractTextPlugin.extract([
          'css-loader',
          'sass-loader'
        ])
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'app.min.css'
    })
  ]
}

module.exports = config;