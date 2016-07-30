import express from 'express';
import configureServer from './config/express';
import env from './../shared/env';

const { host, port } = env;

let app = express();
configureServer(app);

export default app;

app.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`);
    }
});