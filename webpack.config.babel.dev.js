const merge = require('webpack-merge')
const common = require('./webpack.config.babel.common')

module.exports = merge(common, {
      devtool: 'eval-source-map'
})
