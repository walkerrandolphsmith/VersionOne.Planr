import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'GET_CONVERSATION_STREAM';

const success = createAction(
    ACTION,
    (workitemOidToken, conversations) => ({workitemOidToken, conversations})
);

export const getConversationStream = (workitemOidToken) => (dispatch, getState) => {
    axios.get(`/api/conversationstream/${workitemOidToken}`)
        .then(response => {
            const conversations = response.data.Rows;
            dispatch(success(workitemOidToken, conversations));
        })
        .catch(error => {

        });
};

const reducer = (state, payload) => {
    state.workitems[payload.workitemOidToken].conversations = payload.conversations;
    state.workitems = { ...state.workitems };
    return { ...state }
};

export default {
    [ACTION]: reducer
};

