import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import storeConfig from './store';

import App from './components/App';

ReactDOM.render(
  <div>
    <Provider store={storeConfig()}>
      <App initialData={window.initialData} />
    </Provider>
  </div>
  ,
  document.getElementById('root')
);
