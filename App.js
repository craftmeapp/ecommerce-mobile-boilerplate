// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from './src/Store'
import RootContainer from './src/Containers/Root'


const store = createStore()


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer/>
      </Provider>
    )
  }
}
