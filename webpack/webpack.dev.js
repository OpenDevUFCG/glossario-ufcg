const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const parentDir = path.join(__dirname, '../');

module.exports = merge(common, {
    devServer: {
        port: 8000,
        contentBase: `${parentDir}/public`,
        historyApiFallback: true,
    },
    mode: 'development',
});
