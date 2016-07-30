import express from 'express';

export default () => {
    const router = express.Router();
    
    router.post(
        '/backlog',
        (req, res) => {
            invite(req, res);
        }
    );

    return router;
};