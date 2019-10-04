const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const parentDir = path.join(__dirname, '../');

module.exports = merge(common, {
    entry: ['react-hot-loader/patch'],
    devServer: {
        port: 8080,
        contentBase: [`${parentDir}public`],
        historyApiFallback: true,
        watchContentBase: true,
        hot: true,
        inline: true,
        host: '0.0.0.0',
    },
    mode: 'development',
});

