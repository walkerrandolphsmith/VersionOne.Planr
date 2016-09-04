import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
var Spinner = require('cli-spinner').Spinner;
import { devHost, devPort } from './../shared/env';
import webpackConfig from './../../webpack.config.js';

module.exports = function () {
    let bundleStart = null;
    const compiler = Webpack(webpackConfig);

    const spinner = new Spinner('processing.. %s');
    spinner.setSpinnerString('/-\\');

    compiler.plugin('compile', () => {
        spinner.start();
        bundleStart = Date.now();
    });

    compiler.plugin('done', () => {
        console.log(`Bundled in ${Date.now() - bundleStart} ms!`);
        spinner.stop();
    });

    const bundler = new WebpackDevServer(compiler, {
        publicPath: '/build/',
        hot: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    bundler.listen(devPort, devHost, () => {
        console.log('Bundling project, please wait...');
    });
};