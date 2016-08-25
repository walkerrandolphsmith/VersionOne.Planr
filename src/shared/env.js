export default {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    devHost: process.env.DEV_HOST || 'localhost',
    devPort: process.env.DEV_PORT || 3001,
    apiHost: process.env.API_HOST || 'localhost',
    apiPort: process.env.API_PORT || 3002,
    isBrowser: process.browser,
    nodeEnv: process.env.NODE_ENV,
    v1Host: process.env.V1Host,
    v1Instance: process.env.V1Instance,
    v1User: process.env.V1User,
    v1Password: process.env.V1Password
};