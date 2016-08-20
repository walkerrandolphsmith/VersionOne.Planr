import axios from 'axios';
import { ActionCreators as WorkitemActions } from './../../workitem';

export default (workitemOidToken) => (dispatch, getState) => {
    axios
        .get(`/api/activitystream/${workitemOidToken.replace(':', '-')}`)
        .then(response => {
            const activity = response.data;
            dispatch(WorkitemActions.updateWorkitemWithActivityStream(workitemOidToken, activity));
        })
        .catch(error => {
            
        });
}