import path from 'path';
import express from 'express';
import expressPromise from 'express-promise';
import cors from 'cors';
import bodyparser from 'body-parser';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import defaultRoute from './defaultRoute';
import apiRouter from './apiRouter';
import env from './../shared/env';
var config = require('./../../webpack.config');

const { nodeEnv, host, port, devHost, devPort } = env;

const logger = (err) => {
    if(err) {
        console.error(err);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`);
    }
};

const app = express();

app.use(expressPromise());
app.use(cors());
app.use(bodyparser.json());

if(nodeEnv === 'development') {
    app.use(express.static(path.join(__dirname, './../../../src')));

    const compiler = webpack(config);
    const devServerSettings = {
        noInfo: true,
        publicPath: config.output.publicPath
    };
    app.use(webpackDevMiddleware(compiler, devServerSettings));
    app.use(webpackHotMiddleware(compiler));

    new WebpackDevServer(webpack(config), config.devServer).listen(devPort, devHost, logger);
}

app.use('/api', apiRouter);
app.use('/', defaultRoute);

export default app;

app.listen(port, logger);