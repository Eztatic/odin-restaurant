const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
      static: './dist',
  },
  plugins: [
      new HTMLWebpackPlugin({
            title: 'Rest o Rant',
            template: 'src/index.html',
      })
  ],
  optimization: {
      runtimeChunk: 'single',
  }
};