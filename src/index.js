import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import  Router  from './components/Routing/Router'
import { Provider } from 'react-redux';
import { store } from './components/REDUX/Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>
);

