import bodyparser from 'body-parser';
import express from 'express';
import path from 'path';
import axios from 'axios';
import sdk, {axiosConnector} from 'v1sdk';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import env from './../shared/env';
var config = require('./../../webpack.config');

const { host, port, nodeEnv, devPort } = env;

let app = express();
app.use(bodyparser.json());
export default app;

if(nodeEnv === 'development') {
    app.use(express.static(path.join(__dirname, './../src')));

    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));

    new WebpackDevServer(webpack(config), config.devServer).listen(devPort, host, err => {
        if(err) {
            console.error(err);
        } else {
            console.info(`==> 🌎 Listening on port ${devPort}`);
        }
    });
} else {
    app.use(express.static('dist/public'));
}
app.use('/', (req, res) => {
    res.send("walker");
     const jqueryConnectedSdk = axiosConnector(axios)(sdk);
     const v1 = jqueryConnectedSdk('wsmith3', 'versionone.web')
     .withCreds('admin', 'admin'); // usage with username/password
     //  .withAccessToken('your token'); // usage with access tokens

     v1.create('Story', {name: 'wepapp', estimate: 5, scope: 'Scope:0'})
     .then(response => console.log(response.data))
     .catch(console.log);
});

app.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`);
    }
});
