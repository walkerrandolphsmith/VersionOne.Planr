import apiServer from './../apiServer';
import path from 'path';
import express from 'express';
import expressPromise from 'express-promise';
import cors from 'cors';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import httpProxy from 'http-proxy';
import defaultRoute from './defaultRoute';
import { nodeEnv, host, port, devHost, devPort, apiHost, apiPort } from './../shared/env';
var config = require('./../../webpack.config');

const logger = (err, message) => {
    if(err) {
        console.error(err);
    } else {
        console.info(message);
    }
};

const app = express();

app.use(expressPromise());
app.use(cors());
app.use(cookieParser());

const apiServerDomain = `http://${apiHost}:${apiPort}`;
const proxy = httpProxy.createProxyServer({
    target: apiServerDomain
});

app.use('/api', (req, res) => {
    proxy.web(req, res, { target: apiServerDomain });
});
//Use body parser middleware after proxying to the api server to prevent the need to buffer the http post methods
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
    const successMessage = `==> 🌎  Proxying requests to WebPackDevServer on port ${devPort}.`;
    new WebpackDevServer(webpack(config), config.devServer).listen(devPort, devHost, logger.bind(this, successMessage));
}

app.use('/', defaultRoute);

export default app;

const msg = `
==> 🌎  Listening on port ${port}. \n
       Open up http://${host}:${port}/ in your browser when bundle is valid. \n
       Waiting on bundle to be valid ...
`;
app.listen(port, logger.bind(this, msg));