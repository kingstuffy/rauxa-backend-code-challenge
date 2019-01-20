import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainContent = {
      marginLeft: '120px',
    };

    return (
      <div className="dashboard">
        <main className="main-content" style={mainContent}>
          <div className="content-area">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  children: '',
};

Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;
