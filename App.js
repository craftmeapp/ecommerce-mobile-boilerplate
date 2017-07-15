// @flow

import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/Store';
import RootContainer from './src/Containers/Root';


const store = createStore();

const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
);

export default App;
