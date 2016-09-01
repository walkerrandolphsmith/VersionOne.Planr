import { createAction } from 'redux-actions';
import axios from 'axios';

const ACTION = 'GET_LINKS';

const success = createAction(
    ACTION,
    (workitemOidToken, links) => ({workitemOidToken, links})
);

export const getLinks = (workitemOidToken) => (dispatch, getState) => {
    axios
        .post('/api/query/', {
            from: 'PrimaryWorkitem',
            select: [
                "Links",
                "Links.Name",
                "Links.URL"
            ],
            where: {
                ID: workitemOidToken
            }
        })
        .then(response => {
            let workitem = response.data[0][0];
            const links = workitem.Links.map((link, i) => {
                return {
                    oid: workitem['Links'][i]._oid,
                    name: workitem['Links.Name'][i],
                    url: workitem['Links.URL'][i]
                };
            });
            dispatch(success(workitemOidToken, links));
        })
        .catch(error => {

        });
};

const reducer = (state, payload) => {
    state.workitems[payload.workitemOidToken].links = payload.links;
    state.workitems = { ...state.workitems };
    return { ...state };
};

export default {
    [ACTION]: reducer
};

