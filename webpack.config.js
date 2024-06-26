const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
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
      hot: true,
      open: true,
  },
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff2|woff|eot|ttf|otf)$/i,
          type: 'asset/resource',
        }
      ],
  },
  plugins: [
      new HTMLWebpackPlugin({
            title: 'Rest o Rant',
            template: './src/index.html',
      })
  ],
  optimization: {
      runtimeChunk: 'single',
  }
};