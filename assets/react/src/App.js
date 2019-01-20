import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/normalize.css';
import font from 'font-awesome/css/font-awesome.css';

const App = props => (
  <div>
    {props.children}
  </div>
);

App.defaultProps = {
  children: '',
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
