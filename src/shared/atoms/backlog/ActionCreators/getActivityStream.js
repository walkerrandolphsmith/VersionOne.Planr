import axios from 'axios';
import { updateWorkitemWithActivityStream } from './index';

export default (workitemOidToken) => (dispatch, getState) => {
    axios
        .get(`/api/activitystream/${workitemOidToken.replace(':', '-')}`)
        .then(response => {
            const activity = response.data;
            dispatch(updateWorkitemWithActivityStream(workitemOidToken, activity));
        })
        .catch(error => {
            
        });
}