import express from 'express';
import {
    getConversationStream,
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

    return router;
};