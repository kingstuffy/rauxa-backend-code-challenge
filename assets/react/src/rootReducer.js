import { combineReducers } from 'redux';
import contactsReducer from './services/contacts/reducers';

const appReducer = combineReducers({
  contacts: contactsReducer,
});

export default appReducer;
