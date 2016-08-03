import express from 'express';
import {
    getConversationStream,
    getActivityStream,
    getWorkitemDetails
} from './../routes/api';

export default () => {
    const router = express.Router();
    
    router.get(
        '/workitem/:id',
        (req, res) => {
            const workitemOidToken = req.originalUrl.split('/workitem/')[1].replace('-', ':');
            getWorkitemDetails(workitemOidToken)
                .then(workitem => {
                    res.status(200).send(workitem);
                });
        }
    );

    router.get(
        '/conversation-stream/:id',
        (req, res) => {
            const workitemOidToken = req.originalUrl.split('/conversation-stream/')[1].replace('-', ':');
            getConversationStream(workitemOidToken)
                .then(expresssions => {
                    res.status(200).send(expresssions);
                });
        }
    );

    router.get(
        '/activity-stream/:id',
        (req, res) => {
            const workitemOidToken = req.originalUrl.split('/activity-stream/')[1].replace('-', ':');
            getActivityStream(workitemOidToken)
                .then(activity => {
                    res.status(200).send(activity);
                });
        }
    );

    return router;
};