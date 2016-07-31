import axios from 'axios';
import { selectWorkitem, updateWorkitemWithDetails } from './index';
import { createWorkitemRecord } from './../Records';

export default (workitemOidToken) => (dispatch, getState) => {
    dispatch(selectWorkitem(workitemOidToken));
    axios
        .get(`/api/workitem/${workitemOidToken.replace(':', '-')}`)
        .then(repsonse => {
            const workitemWithDetails = createWorkitemRecord(repsonse.data[0][0]);
            dispatch(updateWorkitemWithDetails(workitemWithDetails));
        })
        .catch(error => {

        });
}