const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const parentDir = path.join(__dirname, '../');

module.exports = merge(common, {
    entry: ['react-hot-loader/patch',`${parentDir}src`],
    devServer: {
        port: 8000,
        contentBase: [`${parentDir}public`, `${parentDir}src`],
        historyApiFallback: true,
        watchContentBase: true,
        hotOnly: true,
    },
    mode: 'development',
});

