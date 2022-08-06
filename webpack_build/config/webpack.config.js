const path = require('path');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../index.js')
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ]
          }
        }
      }
    ]
  }
}
