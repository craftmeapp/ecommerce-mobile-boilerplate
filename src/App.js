/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import Root from './components/Root';
import * as reducers from './reducers'


const store = (() => {
  const reducer = combineReducers(reducers);
  return createStore(reducer);
})();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}
