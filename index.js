import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux';
import App from './src/app';
import { name as appName } from './app';

const redux = configureStore();

const Root = () => (
  <Provider store={redux.store}>
    <PersistGate loading={null} persister={redux.persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
