import express from 'express';
import axios from 'axios';
import sdk, {axiosConnector} from 'v1sdk';

const axiosConnectedSdk = axiosConnector(axios)(sdk);
const v1 = axiosConnectedSdk('wsmith3', 'versionone.web')
    .withCreds('admin', 'admin');
//  .withAccessToken('your token');

export default () => {
    const router = express.Router();
    
    router.get(
        '/backlog',
        (req, res) => {
            v1.query({
                from: 'PrimaryWorkitem',
                select: ['Name', 'Number', 'Children'],
                page: {
                    start: 0,
                    size: 500
                }
            }).then(response => {
                res.send(response.data);
            });
        }
    );

    return router;
};