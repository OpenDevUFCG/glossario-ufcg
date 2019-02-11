const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");


const config = {
    mode: 'development',
    entry: ['react-dev-utils/webpackHotDevClient', './src/index.js'],
    devServer: {
        port: 8000,
        contentBase: __dirname + '/public',
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|png|gif)$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebPackPlugin({
            template: __dirname + "/src/index.html",
            filename: "index.html"
        })
    ]
};

module.exports = config;