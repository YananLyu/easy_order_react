import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
