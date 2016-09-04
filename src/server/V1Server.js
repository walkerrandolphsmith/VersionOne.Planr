import axios from 'axios';
import sdk, {axiosConnector} from 'v1sdk';
import { v1Host, v1Instance } from './../shared/env';

const axiosConnectedSdk = axiosConnector(axios)(sdk);
export default (token)=> {
    return axiosConnectedSdk(v1Host, v1Instance)
        .withAccessToken(token)
}
