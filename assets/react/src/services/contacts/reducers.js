import { combineReducers } from 'redux';
import * as types from './constants';

const initialState = {
  fetchStatus: {
    fetching: false,
    ok: false,
    error: false,
  },
  createStatus: {
    fetching: false,
    ok: false,
    error: false,
  },
  contactList: [],
  contact: {},
  message: '',
  messages: {},
  meta: {},
};

const contacts = (state = initialState, action) => {
  let fetchStatusProp;
  let createStatusProp;

  switch (action.type) {
    case types.FETCH_CONTACTS_REQUEST:
      fetchStatusProp = { fetching: true, ok: false, error: false };
      return {
        ...state,
        fetchStatus: fetchStatusProp,
      };

    case types.FETCH_CONTACTS_SUCCESS:
      fetchStatusProp = { fetching: false, ok: true, error: false };
      return {
        ...state,
        fetchStatus: fetchStatusProp,
        contactList: action.contacts,
        meta: action.meta,
      };

    case types.FETCH_CONTACTS_FAILURE:
      fetchStatusProp = { fetching: false, ok: false, error: true };
      return {
        ...state,
        fetchStatus: fetchStatusProp,
        message: action.message,
      };


    case types.VIEW_CONTACT_REQUEST:
      fetchStatusProp = { fetching: true, ok: false, error: false };
      return {
        ...state,
        fetchStatus: fetchStatusProp,
      };

    case types.VIEW_CONTACT_SUCCESS:
      fetchStatusProp = { fetching: false, ok: true, error: false };
      return {
        ...state,
        fetchStatus: fetchStatusProp,
        contact: action.contact,
      };

    case types.VIEW_CONTACT_FAILURE:
      fetchStatusProp = { fetching: false, ok: false, error: true };
      return {
        ...state,
        fetchStatus: fetchStatusProp,
        message: action.message,
      };


    case types.CREATE_CONTACT_REQUEST:
      createStatusProp = { fetching: true, ok: false, error: false };
      return {
        ...state,
        createStatus: createStatusProp,
      };

    case types.CREATE_CONTACT_SUCCESS:
      createStatusProp = { fetching: false, ok: true, error: false };
      return {
        ...state,
        createStatus: createStatusProp,
        message: action.message,
        contact: action.contact,
      };

    case types.CREATE_CONTACT_FAILURE:
      createStatusProp = { fetching: false, ok: false, error: true };
      return {
        ...state,
        createStatus: createStatusProp,
        message: action.message,
        messages: action.messages,
      };

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  contacts,
});

export default contactsReducer;

