var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist', 'public', 'build');
var mainPath = path.resolve(__dirname, 'src', 'client', 'index.js');

var config = {
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new Dotenv({
            path: './.env'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: [nodeModulesPath] },
            { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
            { test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
        ]
    }
};

module.exports = config;