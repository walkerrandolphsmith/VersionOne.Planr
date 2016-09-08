const DEFAULT_HOST = 'localhost';
const {
    VERSION_NUMBER,
    NODE_ENV,
    HOST, PORT,
    DEV_HOST, DEV_PORT,
    API_HOST, API_PORT,
    V1Protocol, V1Port, V1Host, V1Instance
} = process.env;

export const isBrowser = process.browser;
export const nodeEnv = NODE_ENV || 'production';
export const versionNumber = VERSION_NUMBER;
export const host = HOST || DEFAULT_HOST;
export const port = PORT || 3000;
export const devHost = DEV_HOST || DEFAULT_HOST;
export const devPort = DEV_PORT || 3001;
export const apiHost = API_HOST || DEFAULT_HOST;
export const apiPort = API_PORT || 3002;
export const v1Protocol = V1Protocol;
export const v1Port = V1Port;
export const v1Host = V1Host;
export const v1Instance = V1Instance;
