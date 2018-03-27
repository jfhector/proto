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
                        test: /\.css$/,
                        loader: 'style-loader',
                        exclude: /node-modules/,
                  },
                  {
                        test: /\.css$/,
                        loader: 'typings-for-css-modules-loader', // USING THIS IN PLACE OF css-loader TO GET TYPESCRIPT VALIDATION ACROSS TSX AND CSS
                        exclude: /node-modules/,
                        query: {
                              modules: true,
                              namedExport: true,
                              localIdentName: '[local]-[hash:base64:5]'
                        }
                  },
                  {
                        test: /\.(png|jpg|gif)$/,
                        loader: 'file-loader',
                  }
            ]
      },
      resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()],
      devtool: 'eval-source-map'
}
