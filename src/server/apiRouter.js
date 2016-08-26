import express from 'express';
import v1 from './V1Server';

const router = express.Router();

router.get('/activitystream/:id', (req, res) => {
    console.log(req.originalUrl);
    const oid = req.originalUrl.split('/activitystream/')[1];
    v1.getActivityStream(oid).then(response => {
        res.status(200).send(response.data);
    });
});

router.post('/query', (req, res) => {
    v1.query(req.body).then(response => {
        res.status(200).send(response.data[0][0]);
    });
});

export default router;