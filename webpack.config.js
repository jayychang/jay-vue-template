var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './source/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'less': 'vue-style-loader!css-loader!less-loader',
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
        }
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'source/public/components'),
      Layouts: path.resolve(__dirname, 'source/public/layouts'),
    }
  }
}
