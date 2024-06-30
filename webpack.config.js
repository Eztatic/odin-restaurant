const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/js/index.js',
      dependOn: 'shared',
    },
    home: {
      import: './src/js/home.js',
      dependOn: 'shared',
    },
    menu: {
      import: './src/js/menu.js',
      dependOn: 'shared',
    },
    location: {
      import: './src/js/location.js',
      dependOn: 'shared',
    },
    aboutUs: {
      import: './src/js/about-us.js',
      dependOn: 'shared',
    },
    shared: './src/style.css'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
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