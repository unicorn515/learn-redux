import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <div>
    <App initialData={window.initialData} />
  </div>
  ,
  document.getElementById('root')
);
