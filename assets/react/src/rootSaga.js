import { all } from 'redux-saga/effects';
import * as contactsSaga from './services/contacts/sagas';

export default function* rootSaga() {
  yield all([
    contactsSaga.fetchContactsSaga(),
    contactsSaga.createContactSaga(),
    contactsSaga.viewContactSaga(),
  ]);
}
