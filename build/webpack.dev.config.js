const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheep-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    historyApiFallback: true,
    port: 8081,
    hot: true,
    overlay: {
      warning: true,
      error: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
