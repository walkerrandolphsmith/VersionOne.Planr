import { createAction } from 'redux-actions';
import axios from 'axios';
import { V1Host, V1Instance } from './../../env';

const ACTION = 'GET_CONVERSATION_STREAM';

const success = createAction(
    ACTION,
    (workitemOidToken, workitem) => ({workitemOidToken, workitem})
);

export const getConversationStream = (workitemOidToken) => (dispatch, getState) => {
    axios.get(`/api/conversationstream/${workitemOidToken}`)
        .then(response => {
            console.log(response.data);
            //dispatch(success(workitemOidToken, workitem));
        })
        .catch(error => {

        });
};

const reducer = (state, payload) => {
    //state.workitems[payload.workitemOidToken].conversations = conversations;
    return { ...state }
};

export default {
    [ACTION]: reducer
};

