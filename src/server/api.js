import express from 'express';
import expressPromise from 'express-promise';
import cors from 'cors';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import sdk, { axiosConnector } from 'v1sdk';
import { apiPort, v1Protocol, v1Host, v1Instance } from './../shared/env';

const axiosConnectedSdk = axiosConnector(axios)(sdk);
export const v1 = (token) => axiosConnectedSdk(v1Host, v1Instance, undefined, v1Protocol).withAccessToken(token);

const app = express();

app.use(expressPromise());
app.use(cors());
app.use(bodyparser.json());
app.use(cookieParser());

app.get('/validate', (req, res) => {
    const authToken = req.header('Authorization') || req.cookies.Authorization;
    const rawToken = typeof authToken == 'string' ? authToken.split(' ')[1] : "";

    v1(authToken)
        .query({
            from: 'Grant',
            select: [
                'Owner.Avatar.Content'
            ],
            where: {
                Token: rawToken
            }
        })
        .then(response => {
            res
                .cookie('Authorization', authToken, { maxAge: 900000, httpOnly: false })
                .status(200)
                .send(response.data);
        }).catch((err) => {
            res.clearCookie('Authorization').status(401).send();
        });
});

app.get('/activitystream/:id', (req, res) => {
    const oid = req.originalUrl.split('/activitystream/')[1];
    const authToken = req.cookies.Authorization;
    v1(authToken).getActivityStream(oid).then(response => {
        res.status(200).send(response.data);
    });
});

app.get('/conversationstream/:id', (req, res) => {
    const oid = req.originalUrl.split('/conversationstream/')[1];
    const authToken = req.cookies.Authorization;
    const url = `${v1Protocol}://${v1Host}/${v1Instance}/Mobile.mvc/GetConversationStream?involving=${oid}`;
    axios.get(url, {
        headers: {
            'Authorization': authToken
        }
    }).then(response => {
        res.status(200).send(response.data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/conversationthread/:id', (req, res) => {
    const oid = req.originalUrl.split('/conversationthread/')[1];
    const authToken = req.cookies.Authorization;
    const url = `${v1Protocol}://${v1Host}/${v1Instance}/Mobile.mvc/GetConversationThread?Oid=${oid}`;
    axios.get(url, {
        headers: {
            'Authorization': authToken
        }
    }).then(response => {
        res.status(200).send(response.data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.use('/query', (req, res) => {
    const authToken = req.cookies.Authorization;
    v1(authToken).query(req.body).then(response => {
        res.status(200).send(response.data);
    });
});

app.post('/create', (req, res) => {
    const { assetType, assetData } = req.body;
    const authToken = req.cookies.Authorization;
    v1(authToken).create(assetType, assetData).then(response => {
        res.status(200).send(response.data);
    });
});

app.post('/update', (req, res) => {
    const { oidToken, assetData } = req.body;
    const authToken = req.cookies.Authorization;
    v1(authToken).update(oidToken, assetData).then(response => {
        res.status(200).send(response.data);
    });
});

app.post('/executeOperation', (req, res) => {
    const { oidToken, operationName } = req.body;
    const authToken = req.cookies.Authorization;
    v1(authToken).executeOperation(oidToken, operationName).then(response => {
        res.status(200).send(response.data);
    });
});

export default app;

app.listen(apiPort, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.info(`==> 💻  API Server listening on port ${apiPort}`);
    }
});