/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
      entry: ['./src/index'],
      output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
      },
      module: {
            rules: [
                  {
                        test: /\.tsx?$/,
                        use: ['babel-loader', 'awesome-typescript-loader'],
                        exclude: /node-modules/,
                  },
                  {
                        test: /\.(png|jpg|gif)$/,
                        use: [
                              {
                                    loader: 'file-loader',
                                    options: {}
                              }
                        ]
                  }
            ]
      },
      resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      plugins: [
            new HtmlWebpackPlugin({
                  hash: true,
                  title: 'My Awesome App',
                  template: './src/index.html',
            }),
            new webpack.NamedModulesPlugin()
      ]
}
