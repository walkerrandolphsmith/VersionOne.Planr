import { Records } from './../shared/atoms/workitem';
import v1 from './../shared/lib/V1Server';

const getBacklog = () => {
    return v1.query({
        from: 'Workitem',
        select: ['Name', 'Number', 'Children'],
        page: {
            start: 0,
            size: 50
        }
    })
};

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
