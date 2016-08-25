import express from 'express';
import v1 from './V1Server';

export default () => {
    const router = express.Router();

    router.get('/activitystream/:id', (req, res) => {
        const oid = req.originalUrl.split('/activitystream/')[1].replace('-', ':');
        v1.getActivityStream(oid).then(response => {
            res.status(200).send(response.data);
        });
    });

    router.post('/query', (req, res) => {
        v1.query(req.body).then(response => {
            res.status(200).send(response.data[0][0]);
        });
    });

    return router;
};