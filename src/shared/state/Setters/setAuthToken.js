import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const ACTION = 'SET_USER';
const success = createAction(
    ACTION,
    avatar => ({ avatar })
);


export const setAuthToken = ( authToken ) => (dispatch) => {
    const headers = authToken ? { 'Authorization' : "Bearer ".concat(authToken) } : {};

    axios
        .get('/api/validate', {
            headers:headers
        })
        .then( (response) => {
            if(response.status === 200) {
                const avatar = response.data[0][0]['Owner.Avatar.Content'];
                dispatch(success(avatar));
                if(authToken) {
                    dispatch(push('/planr'));
                }
            } else {
                dispatch(push('/'));
            }
        }).catch((err)=>{
            console.log('failure', err);
            dispatch(push('/'));
        });
};

const reducer = (state, payload) => {
    state.currentUser = payload.avatar;
    return { ...state };
};

export default {
    [ACTION]: reducer
};
