import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import render from './render';
import getInitialState from './seedStore';
import configureStore from './../shared/store';
import routes from './../shared/routes';

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
                const markup = render(renderProps, store);
                response.status(200).end(markup);
            });
        });
}