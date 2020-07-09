const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const NODE_MODULES = /node_modules/

const parentDir = path.join(__dirname, '../');

const config = {
  entry: [`${parentDir}src/index.js`],
  output: {
    path: `${parentDir}public/`,
    filename: 'bundle.[hash].js',
  },
  resolve: {
    alias: {
      '@glossario-ufcg': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: NODE_MODULES,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)$/,
        exclude: NODE_MODULES,
        loader: 'url-loader?limit=10000&name=assets/images/[name].[ext]',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: NODE_MODULES,
        loader: 'url-loader?limit=10000&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude:  /\.module\.css$/,
        use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.module\.css$/,
        use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader?modules=true&camelCase=true']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css'
    }),
    new HtmlWebPackPlugin({
      template: `${parentDir}public/index.html`,
      filename: 'index.html',
      favicon: './assets/images/favicon.ico',
    }),
  ],
};

module.exports = config;
