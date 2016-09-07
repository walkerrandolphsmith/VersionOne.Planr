import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import { App } from './components/App';
import { NotFound } from './components/NotFound';
import { Landing } from './components/Landing';
import { Story } from './components/Story';
import { Login } from './components/Login';

const routes = (
    <Route history={browserHistory} path="/" component={App} >
        <IndexRoute component={Login} />
        <Route path="/Story/:id" component={Story} />
        <Route path="/Defect/:id" component={Story} />
        <Route path="/planr" component={Landing} />
        <Route path={'*'} component={NotFound} status={404} />
    </Route>
);

export default routes;