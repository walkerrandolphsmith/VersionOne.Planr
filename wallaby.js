process.env.NODE_ENV = 'test';

var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config');
webpackConfig.externals = {
    'react': 'React'
};
var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function(wallaby) {
    return {
        files: [
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
            {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
            {pattern: 'src/**/*.js', load: false},
            {pattern: 'src/**/*.spec.js', ignore: true},
            {pattern: 'src/client/**/*.js', ignore: true}
        ],
        tests: [
            {pattern: 'src/**/*.spec.js', load: false}
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel(),
        },
        postprocessor: wallabyPostprocessor,
        setup: function() {
            chai.should();
            window.__moduleBundler.loadTests();
        }
    }
};