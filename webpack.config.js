var path = require('path');
var webpack = require('webpack');


module.exports = {
 
    entry: {main: './index.js'},
    mode: 'development',

    output: {
        filename: '[name].js',
        library: 'main',
        libraryTarget: 'commonjs2'
    },

    module: {
       rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }

};
