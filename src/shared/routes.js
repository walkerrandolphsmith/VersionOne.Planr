import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import { App } from './components/app';
import { NotFound } from './components/NotFound';
import { Landing } from './components/Landing';
import { Login } from './components/Login';

const routes = (
    <Route history={browserHistory} path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/planr" component={Landing}/>
        <Route path={'*'} component={NotFound} status={404} />
    </Route>
);

export default routes;