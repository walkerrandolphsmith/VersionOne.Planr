import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const VALID_ACTION = 'SET_AUTHTOKEN';
const INVALID_ACTION = 'UNSET_AUTHTOKEN';

const validated = createAction(
    VALID_ACTION,
    (authToken) => ({ authToken })
);

const invalid = createAction(
    INVALID_ACTION,
    () => ({})
);


export const setAuthToken = ( authToken ) => (dispatch) => {
    authToken = "Bearer ".concat(authToken);
    axios
        .get('/api/validate', {
            headers:{
                'Authorization':authToken
            }
        })
        .then( (response) => {
            if(response.status === 200) {
                dispatch(validated(authToken));
                dispatch(push('/planr'));
            } else {
                dispatch(invalid(authToken));
            }
        }).catch((err)=>{
            console.log('failure', err);
            dispatch(invalid(authToken));
        });
};

const validReducer = (state, payload) => {
    state.authToken = payload.authToken;
    localStorage.setItem('authToken', state.authToken);
    return {...state};
};

const invalidReducer = (state)=> {
    delete state.authToken;
    localStorage.setItem('authToken', state.authToken);
    return {...state};
};

export default {
    [VALID_ACTION]: validReducer,
    [INVALID_ACTION]: invalidReducer
};

