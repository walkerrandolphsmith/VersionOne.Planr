import React from 'react';
import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import configureStore from './../shared/store';
import { ActionCreators } from './../shared/state';
import routes from './../shared/routes';
import v1 from './V1Server';
import { v1Host, v1Protocol, v1Instance } from './../shared/env';

export const generateHTMLString = (componentHTML, initialState) => `
    <!doctype html>
    <html>
      <head>
        <title>VersionOne.Planr</title>
        <meta name="description" content="VersionOne.Planr." />
        <meta name="author" content="Walker Randolph Smith" />
        <link rel="icon" type="image/png" href="assets/images/default-user.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png" />
        <!--<link rel="stylesheet" type="text/css" href="styles.css" />-->
      </head>
      <body>
        <div id="app"><div>${componentHTML}</div></div>
        <div id="container"></div>
        <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
`;

export const storyRoute = (request, response) => {
    const authToken = request.header('Authorization') || request.cookies.Authorization;
    const token = request.originalUrl.split('/Story/')[1];
    const oid = 'Story:' + token;
    if(isNaN(parseInt(token)) || typeof parseInt(token) !== "number") response.status(200).end();
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log(oid);
    console.log(authToken);
    v1(authToken).query({
        from: 'PrimaryWorkitem',
        select: [
            "Super",
            "Super.Name",
            "Super.Scope",
            "Super.Category",
            "Super.Category.Name"
        ],
        where: {
            ID: oid
        }
    }).then(assets => {
        console.log(assets.data[0][0]);
        const workitem = assets.data[0][0];
        const epic = {
            oid: workitem.Super._oid,
            name: workitem['Super.Name'],
            scope: workitem['Super.Scope']._oid,
            category: {
                oid: workitem['Super.Category']._oid,
                name: workitem['Super.Category.Name']
            }
        };
        const workitemOidToken = workitem._oid;

        const store = configureStore({
            initialState: {
                routing: undefined,
                backlogStateAtom: {
                    v1Host: v1Host,
                    v1Protocol: v1Protocol
                }
            },
            history: undefined
        });

        store.dispatch(ActionCreators.setEpic(epic));
        store.dispatch(ActionCreators.selectWorkitem(0, workitemOidToken));

        console.log('State--------------------------');
        console.log(store.getState());

        const markup = generateHTMLString('', store.getState());
        response
            .cookie('Authorization', authToken, { maxAge: 900000, httpOnly: false })
            .status(200).end(markup);
    });
};

export default (request, response) => {
    const location = request.originalUrl;
    const store = configureStore({
        initialState: {
            routing: undefined,
            backlogStateAtom: {
                v1Host: v1Host,
                v1Protocol: v1Protocol,
                v1Instance, v1Instance
            }
        },
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
}