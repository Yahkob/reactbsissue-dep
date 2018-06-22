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
    resolve: {
        alias: {
            'react': path.resolve('node_modules', 'react')
        }
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
