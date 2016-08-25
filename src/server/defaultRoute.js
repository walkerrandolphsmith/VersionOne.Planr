import React from 'react';
import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import v1 from './V1Server';
import configureStore from './../shared/store';
import routes from './../shared/routes';

const getInitialState = (url) => v1.query({
    from: 'PrimaryWorkitem',
    select: ['Name', 'Number', 'Children'],
    page: {
        start: 0,
        size: 50
    }
})
.then(response => {
    const workitems = response.data[0].reduce((workitems, wi) => {
        const workitem = {
            oid: wi._oid,
            assetType: wi._oid.split(':'),
            number: wi.Number,
            name: wi.Name,
            description: wi.Description,
            changeDate: wi.ChangeDate,
            createDate: wi.CreateDate,
            estimate: wi.Estimate,
            //Single Value Relations
            scope: wi.Scope? wi.Scope._oid : '',
            status: wi.Status ? wi.Status._oid : '',
            classOfService: wi.ClassOfService ? wi.ClassOfService._oid : '',
            //Multivalue relation
            blockingIssues: wi.BlockingIssues ? wi.BlockingIssues.map(bi => bi._oid) : [],
            Owners: wi.Owners ? wi.Owners.map(bi => bi._oid) : [],
            children: wi.Children.map(child => child._oid)
        };
        workitems[wi._oid] = workitem;
        return workitems;
    }, {});

    return {
        routing: undefined,
        backlogStateAtom: {
            workitems: workitems
        }
    };
});

export const generateHTMLString = (componentHTML, initialState) => `
    <!doctype html>
    <html>
      <head>
        <title>VersionOne.Planr</title>
        <meta name="description" content="VersionOne.Planr." />
        <meta name="author" content="Walker Randolph Smith" />
        <link rel="icon" type="image/png" href="profile.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png" />
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </head>
      <body>
        <div id="app"><div>${componentHTML}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
`;

export default (request, response) => {
    const location = createLocation(request.url);
    getInitialState(request.url)
        .then(initialState => {
            const store = configureStore({
                initialState: initialState,
                history: undefined
            });

            match({ routes, location }, (err, redirectLocation, renderProps) => {
                if(err) {
                    return response.status(500).end('Internal server error.');
                }
                if(!renderProps) {
                    return response.status(404).end('Not found.');
                }
                const markup = generateHTMLString('', store.getState());
                response.status(200).end(markup);
            });
        });
}