const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const webpack = require('webpack');
//
//module.exports = {
//   entry: {
//     app: './src/index.js'
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       title: '模块热替换'
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//  output: {
//    filename: '[name].bundle.js',
//    path: path.resolve(__dirname, 'dist'),
//    publicPath: '/'
//  },
//  module: {
//    rules: [{
//      test: /\.css$/,
//      use: [
//        'style-loader',
//        'css-loader'
//      ]
//    },
//    {
//     test: /\.(png|svg|jpg|gif)$/,
//     use: [
//       'file-loader'
//     ]
//    },
//   {
//     test: /\.(woff|woff2|eot|ttf|otf)$/,
//     use: [
//       'file-loader'
//     ]
//   },
//       {
//         test: /\.(csv|tsv)$/,
//         use: [
//           'csv-loader'
//         ]
//       },
//       {
//         test: /\.xml$/,
//         use: [
//           'xml-loader'
//         ]
//       }
//
//    ]
//  }
//
//};
//
//



module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: '代码分离'
     })
   ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};