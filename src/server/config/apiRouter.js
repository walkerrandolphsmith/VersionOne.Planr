import express from 'express';
import axios from 'axios';
import sdk, { axiosConnector } from 'v1sdk';

const axiosConnectedSdk = axiosConnector(axios)(sdk);
const v1 = axiosConnectedSdk('wsmith3', 'versionone.web')
    .withCreds('admin', 'admin');
//  .withAccessToken('your token');

export default () => {
    const router = express.Router();
    
    router.get(
        '/workitem/:id',
        (req, res) => {
            v1.query({
                from: 'PrimaryWorkitem',
                select: [
                    'Name',
                    'Number',
                    'ChangeDate',
                    'Scope',
                    'Scope.Name',
                    'BlockingIssues',
                    'BlockingIssues.Name',
                    'ChangeSets',
                    'Estimate',
                    'ClassOfService',
                    'ClassOfService.Name',
                    'Status',
                    'Status.Name',
                    'Owners',
                    'Owners.Name',
                    'Owners.Avatar',
                    'Owners.Avatar.Content',
                    'Children'
                ],
                where: {
                    ID: req.originalUrl.split('/workitem/')[1].replace('-', ':')
                }
            }).then(response => {
                const queryResults = response.data[0][0];
                res.status(200).send(queryResults);
            });
        }
    );

    return router;
};