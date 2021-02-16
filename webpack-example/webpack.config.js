const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.jsx', // input file
    output: {
        path: __dirname, filename: 'dist/bundle.js' // output file
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};