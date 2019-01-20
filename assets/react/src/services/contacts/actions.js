import * as types from './constants';

export const fetchContactsRequest = (page = 1) => ({
  type: types.FETCH_CONTACTS_REQUEST,
  page,
});

export const fetchContactsSuccess = (contacts, meta) => ({
  type: types.FETCH_CONTACTS_SUCCESS,
  contacts,
  meta,
});

export const fetchContactsFailure = message => ({
  type: types.FETCH_CONTACTS_FAILURE,
  message,
});


export const createContactRequest = contact => ({
  type: types.CREATE_CONTACT_REQUEST,
  contact,
});

export const createContactSuccess = (message, contact) => ({
  type: types.CREATE_CONTACT_SUCCESS,
  message,
  contact,
});

export const createContactFailure = (message, messages) => ({
  type: types.CREATE_CONTACT_FAILURE,
  message,
  messages,
});

export const viewContactRequest = contactId => ({
  type: types.VIEW_CONTACT_REQUEST,
  contactId,
});

export const viewContactSuccess = contact => ({
  type: types.VIEW_CONTACT_SUCCESS,
  contact,
});

export const viewContactFailure = message => ({
  type: types.VIEW_CONTACT_FAILURE,
  message,
});
