import axios from 'axios';
import { ActionCreators as WorkitemActions } from './../../workitem';
import { Records as WorkitemRecords } from './../../workitem';
import { setCaretPosition } from './index';

export default (i, workitemOidToken) => (dispatch, getState) => {
    dispatch(setCaretPosition(i));
    dispatch(WorkitemActions.selectWorkitem(workitemOidToken));
    axios
        .get(`/api/workitem/${workitemOidToken.replace(':', '-')}`)
        .then(repsonse => {
            const workitemWithDetails = WorkitemRecords.createWorkitemRecord(repsonse.data[0][0]);
            dispatch(WorkitemActions.updateWorkitemWithDetails(workitemWithDetails));
        })
        .catch(error => {

        });
}