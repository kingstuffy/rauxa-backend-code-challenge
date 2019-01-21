import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../index';
import PropTypes from 'prop-types';
import ContactsHome from './scenes/ContactsHome';
import CreateContact from './scenes/CreateContact';

const Contacts = props => (
  <Dashboard>
    <Switch>
      <Route
        exact
        path={`${props.match.url}`}
        component={ContactsHome}
      />
      <Route
        path={'/add'}
        component={CreateContact}
      />
    </Switch>
  </Dashboard>
);


Contacts.defaultProps = {
  match: {
    url: '',
  },
};

Contacts.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default Contacts;
