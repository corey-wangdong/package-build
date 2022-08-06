const path = require('path');

module.exports = {
  entry: './index',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '../dist')
  }
}
