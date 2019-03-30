import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

const root = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  root
);
