import React from 'react';
import { Route } from 'react-router-dom';
import Contacts from './scenes/Contacts';

const DashboardRouter = [
  <Route key="contacts" path="/" component={Contacts}/>,
];

export default DashboardRouter;
