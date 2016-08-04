import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import render from './render';
import { seedStore } from './seedStore';
import routes from './../shared/routes';

export default (request, response) => {
    const location = createLocation(request.url);
    seedStore(request.url).then(store => {
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