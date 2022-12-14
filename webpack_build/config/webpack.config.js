const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TemplatedPathPlugin = require('./my-plugin.js')

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../index.js')
    // index: path.resolve(__dirname, '../src/react.jsx')
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
        test: /\.(js|jsx?|tsx?)$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.mobile$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: './mobile-css-loader',
            options: {
              width: 750,
            }
          }]
      }
    ]
  },
  plugins: [
    // new TemplatedPathPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../tsconfig.json')
      }
    }),
  ],
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
  },
  devServer: {
    port: 8000,
    // open: true,
    hot: true,
  }
}
