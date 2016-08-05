import { getBacklog } from './api';
import { Records } from './../shared/atoms/workitem';

export default (url) => getBacklog()
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

        return initialState;
    });
