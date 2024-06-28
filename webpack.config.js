const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
  },
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff2|woff|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
  },
  plugins: [
      new HTMLWebpackPlugin({
            title: 'Doughnaut',
            template: './src/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {from: 'src/images', to: 'images/'},
          {from: 'src/icons', to: 'icons'}
        ],
      }),
  ],
  optimization: {
      runtimeChunk: 'single',
  }
};