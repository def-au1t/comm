// @flow

import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createStore, applyMiddleware, type Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction.js';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react.js';
import storage from 'redux-persist/es/storage/index.js';
import thunk from 'redux-thunk';

import { reduxLoggerMiddleware } from 'lib/utils/action-logger.js';

import App from './app.react.js';
import ErrorBoundary from './error-boundary.react.js';
import Loading from './loading.react.js';
import { reducer } from './redux/redux-setup.js';
import type { AppState, Action } from './redux/redux-setup.js';
import history from './router-history.js';
import Socket from './socket.react.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'enabledApps',
    'deviceID',
    'draftStore',
    'primaryIdentityPublicKey',
  ],
  version: 0,
};

declare var preloadedState: AppState;
const persistedReducer = persistReducer(persistConfig, reducer);
const store: Store<AppState, Action> = createStore(
  persistedReducer,
  preloadedState,
  composeWithDevTools({})(applyMiddleware(thunk, reduxLoggerMiddleware)),
);
const persistor = persistStore(store);

const RootProvider = (): React.Node => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <ErrorBoundary>
        <Router history={history.getHistoryObject()}>
          <Route path="*" component={App} />
        </Router>
        <Socket />
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);

export default RootProvider;
