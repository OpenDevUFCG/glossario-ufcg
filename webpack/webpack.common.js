const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const parentDir = path.join(__dirname, '../');

const config = {
    entry: [`${parentDir}src/index.js`],
    output: {
        path: `${parentDir}public/`,
        filename: 'bundle.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/,
                exclude: /node_modules/,
                loader:'url-loader?limit=10000&name=assets/images/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000&name=assets/fonts/[name].[ext]'
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
            template: `${parentDir}/src/index.html`,
            filename: "index.html",
            favicon: "./assets/images/favicon.ico"
        })
    ]
};

module.exports = config;