// @flow

import React from 'react';
import {Provider} from 'react-redux';

import {Navigator} from './src/Navigation';
import {StatusBar, View} from './src/Components/Base';
import createStore from './src/Store';


const store = createStore();

const App = () => (
  <Provider store={store}>
    <View>
      <StatusBar />
      <Navigator />
    </View>
  </Provider>
);


console.ignoredYellowBox = ['Warning: componentWill'];


export default App;
