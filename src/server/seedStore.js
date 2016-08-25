import { Records } from './../shared/atoms/backlog';
import v1 from './V1Server';

export default (url) => v1.query({
        from: 'PrimaryWorkitem',
        select: ['Name', 'Number', 'Children'],
        page: {
            start: 0,
            size: 50
        }
    })
    .then(response => {
        const workitems = response.data[0].reduce((workitems, workitem) => {
            workitems[workitem._oid] = Records.createWorkitemRecord(workitem);
            return workitems;
        }, {});

        const initialState = {
            routing: undefined,
            backlogStateAtom: {
                workitems: workitems
            }
        };

        return initialState;
    });
