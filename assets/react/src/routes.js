import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardRouter from './scenes/Dashboard/routes';
import NotFound from './components/NotFound';
import App from './App';

const routes = (
  <App>
    <Switch>
      {DashboardRouter}
      <Route key="404" path="/404" component={NotFound}/>
    </Switch>
  </App>
);

export default routes;
