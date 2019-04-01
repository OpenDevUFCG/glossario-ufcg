const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production'
});
