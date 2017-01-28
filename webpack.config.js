const webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './bootstrap.js',
        vendor: './vendor.js'
    },
    devtool: 'eval',
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ],
    },

    devServer: {
        port: 3000
    }
};