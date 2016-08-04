import axios from 'axios';
import sdk, { axiosConnector } from 'v1sdk';

export default () => {
    const axiosConnectedSdk = axiosConnector(axios)(sdk);
    const v1 = axiosConnectedSdk('wsmith3', 'versionone.web')
        .withCreds('admin', 'admin');
    //  .withAccessToken('your token');

    return v1;
};