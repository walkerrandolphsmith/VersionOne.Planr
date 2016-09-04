import apiServer from './api';
import path from 'path';
import httpProxy from 'http-proxy';
import express from 'express';
import expressPromise from 'express-promise';
import cors from 'cors';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import defaultRoute from './defaultRoute';
import { nodeEnv, host, port, devHost, devPort, apiHost, apiPort } from './../shared/env';

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
const apiProxy = httpProxy.createProxyServer({
    target: apiServerDomain
});

app.use('/api', (req, res) => {
    apiProxy.web(req, res, { target: apiServerDomain });
});
//Use body parser middleware after proxying to the api server to prevent the need to buffer the http post methods
app.use(bodyparser.json());

const publicPath = path.resolve(__dirname, './../../', 'public');
console.log(publicPath);
app.use(express.static(publicPath));

const proxy = httpProxy.createProxyServer();
if (nodeEnv !== 'production') {

    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    var bundle = require('./bundle.js');
    bundle();

    // Any requests to localhost:3000/build is proxied
    // to webpack-dev-server
    app.all('/build/*', (req, res) => {
        proxy.web(req, res, {
            target: `http://${devHost}:${devPort}`
        });
    });
}

proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
});

app.use('/', defaultRoute);

export default app;

const msg = `
==> �  Running ${nodeEnv} environment
       Listening on port ${port}. \n
       Open up http://${host}:${port}/ in your browser when bundle is valid. \n
       Waiting on bundle to be valid ...
`;
app.listen(port, logger.bind(this, msg));