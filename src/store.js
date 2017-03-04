const { createStore, applyMiddleware, compose } = require('redux');

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  books: [],
  authors: {},
};

import reducer from './reducers';

const storeConfig = () => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default storeConfig;
