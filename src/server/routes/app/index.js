import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './../../../shared/routes';
import { getView } from './getView';
import { seedStore } from './seedStore';

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
            const markup = getView(renderProps, store);
            response.end(markup);
        });
    });
}