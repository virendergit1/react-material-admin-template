/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './favicon.ico';
import './styles.scss';
import configureStore from './store/configureStore.dev';
import {loadVisits} from './actions/visitFormActions';
import {loadIncidents} from './actions/incidentFormActions';

// for materil-ui
injectTapEventPlugin();

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyB7TxNNQbiTJKYUXSN62N89xaSob6Qx26U",
    authDomain: "mysecurecomplex.firebaseapp.com",
    databaseURL: "https://mysecurecomplex.firebaseio.com",
    storageBucket: "mysecurecomplex.appspot.com",
    messagingSenderId: "180974727277"
  };
  firebase.initializeApp(config);

// configure store
const store = configureStore();
store.dispatch(loadVisits());
store.dispatch(loadIncidents());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('app')
);