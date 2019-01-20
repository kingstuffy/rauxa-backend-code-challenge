import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { fetchContactsRequest } from '../../../../../../services/contacts/actions';
import EmptyState from '../../../../components/EmptyState';
import Loader from '../../../../components/Loader';
import SectionHeader from '../../../../components/SectionHeader';
import ContactList from './components/ContactList';
import './ContactsHome.css';

class ContactsHome extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.loadData = this.loadData.bind(this);
    this.createContact = this.createContact.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentWillMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.loadData(nextProps);
    }
  }

  onPageChange(page) {
    this.props.history.push(`?page=${page}`);
  }

  createContact(e) {
    e.preventDefault();
    this.props.history.push('add');
  }

  loadData({ location }) {
    const params = queryString.parse(location.search);
    this.props.fetchContactsRequest(params.page || 1);
  }

  renderContent() {
    if (this.props.fetchStatus.fetching) {
      return <Loader/>;
    }

    if (this.props.contactList.length === 0) {
      return (
        <EmptyState
          text="No contact has been created"
          buttonText="Create Contact"
          action={this.createContact}
        />
      );
    }

    return (
      <div>
        <ContactList data={this.props.contactList}/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <SectionHeader>
          <div className="row">
            <div className="col-70">
              <h2 className="page-title">Contacts</h2>
            </div>
            <div className="col-30" style={{ paddingRight: 0 }}>
              <button
                type="button"
                onClick={this.createContact}
              >
                Create
              </button>
            </div>
          </div>
        </SectionHeader>
        <div className="contacts">
          {this.renderContent()}
        </div>
      </div>

    );
  }
}

ContactsHome.defaultProps = {
  fetchStatus: {
    fetching: false,
  },
  contactList: [],
  meta: {
    pageCount: 1,
  },
  location: {
    search: '',
  },
  fetchContactsRequest: () => {
  },
  history: {
    push: () => {
    },
  },
  match: {
    url: '',
  },
};

ContactsHome.propTypes = {
  fetchStatus: PropTypes.shape({
    fetching: PropTypes.bool,
  }),
  contactList: PropTypes.arrayOf(PropTypes.shape({})),
  meta: PropTypes.shape({
    pageCount: PropTypes.number,
  }),
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  fetchContactsRequest: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  fetchStatus: state.app.contacts.contacts.fetchStatus,
  contactList: state.app.contacts.contacts.contactList,
  meta: state.app.contacts.contacts.meta,
});

export default connect(mapStateToProps, { fetchContactsRequest })(ContactsHome);
