const path = require('path');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    // index: path.resolve(__dirname, '../index.js')
    index: path.resolve(__dirname, '../src/react.jsx')
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
        test: /\.(js|jsx?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          filename: 'vendor.js',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
}
