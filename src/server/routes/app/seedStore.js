import configureStore from './../../../shared/store';
import axios from 'axios';
import sdk, {axiosConnector} from 'v1sdk';

export const seedStore = () => {
    return new Promise((resolve, reject) => {
        const axiosConnectedSdk = axiosConnector(axios)(sdk);
        const v1 = axiosConnectedSdk('wsmith3', 'versionone.web')
            .withCreds('admin', 'admin');

        return v1.query({
            from: 'PrimaryWorkitem',
            select: ['Name', 'Number', 'Children'],
            page: {
                start: 0,
                size: 50
            }
        }).then(response => {

            const workitems = response.data[0].reduce((workitems, workitem) => {
                workitem.Children = workitem.Children.map(child => child._oid);
                workitem.Tests = workitem.Children.filter(child => child.startsWith('Test:'));
                workitem.Tasks = workitem.Children.filter(child => child.startsWith('Task:'));
                workitems[workitem._oid] = workitem;
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


            resolve(store);
        });
    });
};