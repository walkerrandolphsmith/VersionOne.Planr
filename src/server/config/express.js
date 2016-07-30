import path from 'path';
import express from 'express';
import expressPromise from 'express-promise';
import cors from 'cors';
import bodyparser from 'body-parser';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { defaultRoute } from './../routes';
import createApiRouter from './apiRouter';
import env from './../../shared/env';
var config = require('./../../../webpack.config');

export default app => {
    const { nodeEnv, devPort } = env;

    app.use(expressPromise());
    app.use(cors());
    app.use(bodyparser.json());

    if(nodeEnv === 'development') {
        app.use(express.static(path.join(__dirname, './../../../src')));

        const compiler = webpack(config);
        app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
        app.use(webpackHotMiddleware(compiler));

        new WebpackDevServer(webpack(config), config.devServer).listen(devPort, 'localhost', err => {
            if(err) {
                console.error(err);
            } else {
                console.info(`==> 🌎 Listening on port ${devPort}`);
            }
        });
    } else {
        app.use(express.static('dist/public'));
    }

    app.use('/api', createApiRouter());
    app.use('/', (req, res) => {
        defaultRoute(req, res);
    });
};
