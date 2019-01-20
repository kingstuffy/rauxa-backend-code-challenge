import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import has from 'lodash/has';
import { reset } from 'redux-form';
import { Button } from 'reactstrap';
import { createContactRequest } from '../../../../../../services/contacts/actions';
import Loader from '../../../../components/Loader';
import SectionHeader from '../../../../components/SectionHeader';
import ContactForm from './components/ContactForm/index';
import './CreateContact.css';

class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  onFormChange(e) {
    if (e.target.name && has(this.props.errors, e.target.name)) {
      // this.props.removeFieldError(e.target.name);
    }
  }

  submit(contactPayload) {
    console.log(contactPayload);
    // this.props.createContactRequest(contactPayload);
  }

  back(e) {
    e.preventDefault();
    this.props.history.push('');
  }

  render() {
    const {
      createStatus,
      errors,
    } = this.props;

    return (
      <div>
        <SectionHeader>
          <div className="row">
            <div className="col-sm-8">
              <h2 className="page-title">New Contact</h2>
            </div>
            <div className="col-sm-4">
              <button className="back-btn pull-right" onClick={this.back}>
                <i className="fa fa-long-arrow-left "/>
              </button>
            </div>
          </div>
        </SectionHeader>
        <div className="contacts__create">
          {
            createStatus.fetching ? (<Loader/>) :
              (
                <ContactForm onSubmit={this.submit}/>
              )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    createStatus: state.app.contacts.contacts.createStatus,
    errors: state.app.contacts.contacts.messages,
  };
};

CreateContact.defaultProps = {
  createStatus: {},
  createContactRequest: () => {
  },
  errors: {},
  history: {
    push: () => {
    },
  },
  reset: () => {
  },
};

CreateContact.propTypes = {
  createStatus: PropTypes.shape({}),
  createContactRequest: PropTypes.func,
  errors: PropTypes.shape({}),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  reset: PropTypes.func,
};

export default connect(mapStateToProps, {
  createContactRequest,
  reset,
})(CreateContact);

