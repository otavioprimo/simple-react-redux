import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';

import * as serviceWorker from './serviceWorker';

//Redux
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
