import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../api';
import has from 'lodash/has';
import { reset } from 'redux-form';
import { loadState } from '../../localStorage';
import * as actions from './actions';
import * as types from './constants';

const sampleData = {
  name: 'John Doe',
  phone: '+1 4492 394 33',
  imgUrl: 'http://placehold.it/128x128'
};

function* fetchContacts(action) {
  try {
    yield put(actions.fetchContactsSuccess([sampleData, sampleData,], {}));
  } catch (error) {
    if (has(error, 'response.data.message')) {
      yield put(actions.fetchContactsFailure(error.response.data.message));
    } else {
      yield put(actions.fetchContactsFailure(error.message));
    }
  }
}

function* createContact(action) {
  try {
    yield put(reset('contactForm'));
    yield put(actions.createContactSuccess(sampleData));
  } catch (error) {
    if (has(error, 'response.data.message')) {
      yield put(actions.createContactFailure(error.response.data.message, error.response.data.errors));
    } else {
      yield put(actions.createContactFailure(error.response));
    }
  }
}

function* viewContact(action) {
  try {
    yield put(actions.viewContactSuccess(sampleData));
  } catch (error) {
    if (has(error, 'response.data.message')) {
      yield put(actions.viewContactFailure(error.response.data.message));
    } else {
      yield put(actions.viewContactFailure(error.response));
    }
  }
}

export function* fetchContactsSaga() {
  yield takeLatest(types.FETCH_CONTACTS_REQUEST, fetchContacts);
}

export function* createContactSaga() {
  yield takeLatest(types.CREATE_CONTACT_REQUEST, createContact);
}

export function* viewContactSaga() {
  yield takeLatest(types.VIEW_CONTACT_REQUEST, viewContact);
}
