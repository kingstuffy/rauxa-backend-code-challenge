import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import startsWith from 'lodash/startsWith';
import { createLogger } from 'redux-logger';
import appReducer from './rootReducer';
import rootSaga from './rootSaga';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => !startsWith(action.type, '@@redux-form'),
  });
  middlewares.push(logger);
}

const configureStore = () => {
  const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
  });

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
