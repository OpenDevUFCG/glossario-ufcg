const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const parentDir = path.join(__dirname, '../');

module.exports = merge(common, {
    entry: ['react-dev-utils/webpackHotDevClient'],
    devServer: {
        port: 8000,
        contentBase: `${parentDir}public`,
        historyApiFallback: true,
    },
    mode: 'development',
});
