const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  entry: {
    // 只是简单的文件合并 不是动态链接库的形式
    polyfills: [
      path.join(__dirname, '../node_modules/babel-polyfill/dist/polyfill.js'),
      path.join(__dirname, '../node_modules/classlist.js/classList.js')
    ]
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].[chunkhash:7].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new AssetsPlugin({
      filename: 'polyfills.conf.json',
      path: path.join(__dirname, '../static/js')
    })
  ]
}

