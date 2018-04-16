const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './www/js/index.js',
  output: {
    path: path.resolve(__dirname, 'www/js'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
};
