const merge = require('webpack-merge')
const common = require('./webpack.config.babel.common')

module.exports = merge(common, {
      plugins: [
            new webpack.DefinePlugin({
                  'process.env.NODE_ENV': '"production"'
            }),
            new HtmlWebpackPlugin({
                  title: 'Prototype',
            }), 
            new webpack.NamedModulesPlugin(),
      ],
})
