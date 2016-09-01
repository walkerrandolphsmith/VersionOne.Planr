import React from 'react';
import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import configureStore from './../shared/store';
import routes from './../shared/routes';

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
        <div id="container"></div>
        <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
`;

export default (request, response) => {
    const location = createLocation(request.url);
    const store = configureStore({
        initialState: {},
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