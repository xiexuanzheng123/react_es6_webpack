var webpack = require('webpack');
var path = require('path');
//var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log("path-----" + path.join(__dirname, '../assets/'));
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: __dirname + '/',
    entry: {
        hrm: [
            'webpack/hot/only-dev-server'
        ],
        app: [
            '../src/js/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, '../assets/'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.js|jsx$/,
                use: [
                    'babel-loader' //,
                    //'eslint-loader' //打包前用eslint检查
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'myapp',
            filename: 'test.html',
            template: '../index.html' 
        })
        //new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
}