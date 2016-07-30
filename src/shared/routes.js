import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/app';
import { NotFound } from './components/NotFound';
import { Landing } from './components/Landing';

export const ROUTES = [
      {
            path: '*',
            component: NotFound,
            status: 404
      }
];

export const getRoutesForRouteDefinitions = routeDefinitions => routeDefinitions.map(
    (route, i) => <Route key={i} path={route.path} component={route.component} status={route.status} />
);

export const RouterFactory = routeDefinitions => {
      const routes = getRoutesForRouteDefinitions(routeDefinitions);

      return (
          <Route path="/" component={App}>
                <IndexRoute component={Landing} />
                {routes}
          </Route>
      );
};

export default RouterFactory(ROUTES);