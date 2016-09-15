import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'UPDATE_TEST';

const success = createAction(
    ACTION,
    (testOid, assetData) => ({ testOid, assetData })
);

export const updateTest = ({ oid, assetData }) => (dispatch, getState) => {
    axios
        .post('/api/update', {
            oidToken: oid,
            assetData: assetData
        })
        .then((response) => {
            dispatch(success(oid, assetData));
        })
        .catch(err => {
            console.log('failure', err)
        });
};

const reducer = (state, payload) => {
    let parentWorkitem = '';
    let updatedTest = '';
    for(let workitemOidToken in state.workitems) {
        const workitem = state.workitems[workitemOidToken];
        const isFound = workitem.tests.find(test => test.oid === payload.testOid);
        if(isFound){
            workitem.tests = workitem.tests.filter(test => test !== isFound);
            updatedTest = isFound;
            parentWorkitem = workitem;
            break;
        }
    }
    for(let attribute in payload.assetData) {
        updatedTest[attribute.toLowerCase()] = payload.assetData[attribute];
    }


    state.workitems[parentWorkitem.oid].tests = [...state.workitems[parentWorkitem.oid].tests, updatedTest];
    state.workitems = { ...state.workitems };
    return { ...state };
};

export default {
    [ACTION]: reducer
};

