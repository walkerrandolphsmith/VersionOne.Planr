import React from 'react';
import { match } from 'react-router';
import { v1 } from './api';
import configureStore from './../shared/store';
import routes from './../shared/routes';
import * as env from './../shared/env';

export const generateHTMLString = (componentHTML, initialState) => `
    <!doctype html>
    <html>
      <head>
        <title>VersionOne.Planr</title>
        <meta name="description" content="VersionOne.Planr." />
        <meta name="author" content="Walker Randolph Smith" />
        <!--<link rel="icon" type="image/png" href="public/images/default-user.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png" />
        <link rel="stylesheet" type="text/css" href="styles.css" />-->
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

const getInitialState = () => ({
    initialState: {
        routing: undefined,
        backlogStateAtom: {
            ...env
        }
    },
    history: undefined
});

export const storyRoute = (request, response) => {
    const location = request.originalUrl;
    const authToken = request.header('Authorization') || request.cookies.Authorization;
    const [ empty, assetType, number ] = location.split('/');
    const oid = `${assetType}:${number}`;
    const storeData = getInitialState();

    if(!authToken) {
        const store = configureStore(storeData);
        const markup = generateHTMLString('', store.getState());
        response.status(200).end(markup);
    }

    v1(authToken)
        .query({
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
            const workitem = assets.data[0][0];
            const workitemOidToken = workitem._oid;
            const epic = {
                oid: workitem.Super._oid,
                name: workitem['Super.Name'],
                scope: workitem['Super.Scope']._oid,
                category: {
                    oid: workitem['Super.Category']._oid,
                    name: workitem['Super.Category.Name']
                }
            };

            storeData.initialState.backlogStateAtom.epic = epic;
            storeData.initialState.backlogStateAtom.selected = workitemOidToken;

            const store = configureStore(storeData);
            const markup = generateHTMLString('', store.getState());
            response.status(200).end(markup);
        }).catch(error => {
            const store = configureStore(storeData);
            const markup = generateHTMLString('', store.getState());
            response.status(200).end(markup);
        });
};

export default (request, response) => {
    const location = request.originalUrl;
    const storeData = getInitialState();
    const store = configureStore(storeData);

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