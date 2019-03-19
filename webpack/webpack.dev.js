const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        port: 8000,
        contentBase: __dirname + '/public',
        historyApiFallback: true,
    },
    mode: 'development',
});
