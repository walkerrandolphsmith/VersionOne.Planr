var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3001/',
        'webpack/hot/only-dev-server',
        './src/client'
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx', '.css', '.less']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
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
