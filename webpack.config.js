const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: ['react','react-dom']
    },
    output: {
        filename: '[chunkhash].[name].js',
        path: path.resolve(__dirname, 'docs')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}