import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

export const setAuthToken = ( authToken ) => (dispatch) => {
    const headers = authToken ? { 'Authorization' : "Bearer ".concat(authToken) } : {};

    axios
        .get('/api/validate', {
            headers:headers
        })
        .then( (response) => {
            if(response.status === 200) {
                dispatch(push('/planr'));
            } else {
                dispatch(push('/'));
            }
        }).catch((err)=>{
            console.log('failure', err);
            dispatch(push('/'));
        });
};
