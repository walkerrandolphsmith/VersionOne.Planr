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
const publicPath = path.resolve(__dirname, './../../', 'public');

console.log(`\nRunning ${nodeEnv} environment`);
console.log(`Static assets served at ${publicPath}`);

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

app.use(express.static(publicPath));

const proxy = httpProxy.createProxyServer();
if (nodeEnv !== 'production') {
    var bundle = require('./bundle.js');
    bundle();

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

const msg = `==> 💻  Open up http://${host}:${port}/ in your browser when bundle is valid. \n`;
app.listen(port, logger.bind(this, msg));