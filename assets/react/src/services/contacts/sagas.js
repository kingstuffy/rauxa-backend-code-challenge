import { call, put, takeLatest } from 'redux-saga/effects';
import has from 'lodash/has';
import { reset } from 'redux-form';
import axios from "axios/index";
import * as actions from './actions';
import * as types from './constants';
import apiConfig from "../api/config";

const sampleData = {
  name: 'John Doe',
  phone: '+1 4492 394 33',
  imgUrl: 'http://placehold.it/128x128'
};

function* fetchContacts(action) {
  try {
    const config = {
      baseURL: apiConfig.listUrl,
      method: 'get',
      url: '/contact',
      params: {
        page: action.page,
      },
    };
    const response = yield call(axios.request, config);
    yield put(actions.fetchContactsSuccess(response.data.data, response.data.meta));
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
    if (!action.contact.name) {
      yield put(actions.createContactFailure('Please provide a name'));
      return;
    }
    if (!action.contact.phone) {
      yield put(actions.createContactFailure('Please provide a phone number'));
      return;
    }
    if (!action.contact.image) {
      yield put(actions.createContactFailure('Please upload an image'));
      return;
    }

    const base64String = yield call(getBase64, action.contact.image);
    const data = {
      ...action.contact,
      image: base64String.split(',')[1]
    };

    const config = {
      baseURL: apiConfig.createUrl,
      method: 'post',
      url: '/contact',
      data,
    };
    const response = yield call(axios.request, config);

    yield put(reset('contactForm'));
    yield put(actions.createContactSuccess(response.data.data));
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

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
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
