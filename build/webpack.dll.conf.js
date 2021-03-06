const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  entry: {
    dll: [
      'vue/dist/vue.esm.js',
      'vue-router',
      'vue-progressbar',
      'jsplumb',
      'axios',
      'echarts'
    ]
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].[chunkhash:7].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static/js', '[name].manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new AssetsPlugin({
      filename: 'dll.conf.json',
      path: path.join(__dirname, '../static/js')
    })
  ]
}

