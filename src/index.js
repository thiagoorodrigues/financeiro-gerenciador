import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux'

import Views from './views';

import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Views />
    </PersistGate>
  </Provider >
);

