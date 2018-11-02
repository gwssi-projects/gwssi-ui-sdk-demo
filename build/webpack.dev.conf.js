const webpack = require('webpack')
const merge = require('webpack-merge')

var baseWebpackConfig = require('./webpack.base.conf')
var config = require('../config')

var env = config.dev.env

var webpackConfig = merge(baseWebpackConfig, {

    devServer: {
        host: '0.0.0.0',
        port: config.dev.port,
        disableHostCheck: true
    },
    //用于调试 控制是否生成，以及如何生成 Source Map。用于对应到源码的行号。
    //eval-source-map 适合开发，source-map 适合线上环境
    //devtool: '#source-map'
    //代码需要调试的地方增加  debugger 即可
    devtool: '#eval-source-map',

    plugins: [
        new webpack.DefinePlugin({
            //设置环境变量 process.env
            'process.env': env
        })
    ]

})

module.exports = webpackConfig