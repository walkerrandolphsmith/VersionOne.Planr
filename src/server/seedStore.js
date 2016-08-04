import { getBacklog } from './api';
import configureStore from './../shared/store';
import { Records } from './../shared/atoms/workitem';

export const seedStore = (url) => getBacklog()
    .then(response => {
        const workitems = response.data[0].reduce((workitems, workitem) => {
            workitems[workitem._oid] = Records.createWorkitemRecord(workitem);
            return workitems;
        }, {});

        const initialState = {
            routing: undefined,
            workitemStateAtom: {
                workitems: workitems
            }
        };

        const store = configureStore({
            initialState: initialState,
            history: undefined
        });


        return store;
    });
