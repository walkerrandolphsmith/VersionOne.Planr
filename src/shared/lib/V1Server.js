import axios from 'axios';
import sdk, {axiosConnector} from 'v1sdk';
import {v1Host, v1Instance, v1User, v1Password} from './../env';

const axiosConnectedSdk = axiosConnector(axios)(sdk);
export default axiosConnectedSdk(v1Host, v1Instance)
    .withCreds(v1User, v1Password);