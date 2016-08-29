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
import v1 from './V1Server';
import { nodeEnv, host, port, devHost, devPort } from './../shared/env';
var config = require('./../../webpack.config');

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

app.get('/api/activitystream/:id', (req, res) => {
    const oid = req.originalUrl.split('/activitystream/')[1];
    v1.getActivityStream(oid).then(response => {
        res.status(200).send(response.data);
    });
});

app.post('/api/query', (req, res) => {
    v1.query(req.body).then(response => {
        res.status(200).send(response.data);
    });
});

app.post('/api/create', (req, res) => {
    const { assetType, assetData } = req.body;
    v1.create(assetType, assetData).then(response => {
        res.status(200).send(response.data);
    });
});

app.post('/api/update', (req, res) => {
    const { oidToken, assetData } = req.body;
    v1.update(oidToken, assetData).then(response => {
        res.status(200).send(response);
    });
});


app.use('/', defaultRoute);

export default app;

app.listen(port, logger);