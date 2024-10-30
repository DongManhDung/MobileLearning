// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root/saga.js';
import jobReducer from './handle/jobReducer.js';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a Redux store
const store = createStore(
  jobReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;