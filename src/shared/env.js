export default {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    devPort: process.env.DEV_PORT || 3001,
    apiHost: process.env.API_HOST || 'localhost',
    apiPort: process.env.API_PORT || 3002,
    isBrowser: process.browser,
    nodeEnv: process.env.NODE_ENV
};