const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entries = ['index', 'home', 'menu', 'location', 'about-us'];

const entry = entries.reduce((acc, name) => {
  acc[name] = {
    import: `./src/js/${name}.js`,
    dependOn: 'shared',
  }
  return acc;
}, {});
entry.shared = './src/style.css';

module.exports = {
  mode: 'development',
  entry: entry,
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
      hot: true,
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
          {from: 'src/icons', to: 'icons'},
          {from: 'src/images/doughnaut-logo.png', to: __dirname + '/dist'}
        ],
      }),
  ],
  optimization: {
      runtimeChunk: 'single',
  }
};

console.log(__dirname);