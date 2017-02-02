const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: ['react','react-dom']
    },
    output: {
        filename: '[chunkhash].[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}