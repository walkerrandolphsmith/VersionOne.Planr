import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/app';
import { NotFound } from './components/NotFound';
import { Landing } from './components/Landing';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path={'*'} component={NotFound} status={404} />
    </Route>
);

export default routes;