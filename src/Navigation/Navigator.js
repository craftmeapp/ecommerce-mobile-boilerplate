// @flow

import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import MainScreen from '../Containers/MainScreen';
import PreloadScreen from '../Containers/PreloadScreen';


const Navigator = StackNavigator({
  PreloadScreen: { screen: PreloadScreen },
  MainScreen: { screen: MainScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'PreloadScreen',
});

export const middleware = createReactNavigationReduxMiddleware(
  'main',
  state => state.navigation,
);
const addListener = createReduxBoundAddListener('main');

const _NavigatorWithState = ({ dispatch, navigation }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: navigation, addListener })}/>
);

const mapStateToProps = state => ({
  navigation: state.navigation,
});


export const NavigatorWithState = connect(mapStateToProps)(_NavigatorWithState);

export default Navigator;
