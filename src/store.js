const { createStore, applyMiddleware } = require('redux');

import thunk from 'redux-thunk';

const initialState = {
  books: [],
  authors: {},
};

import reducer from './reducers';

const storeConfig = () => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  );
};

export default storeConfig;
