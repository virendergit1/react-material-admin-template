/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './favicon.ico';
import './styles.scss';
import configureStore from './store/configureStore.dev';
import {loadVisits} from './actions/visitFormActions';
import {loadIncidents} from './actions/incidentFormActions';

injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadVisits());
store.dispatch(loadIncidents());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('app')
);