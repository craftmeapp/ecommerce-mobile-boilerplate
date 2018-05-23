// @flow

import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import Images from '../Theme/Images';
import MainScreen from '../Screens/MainScreen';
import PreloadScreen from '../Screens/PreloadScreen';


const MainNavigator = createBottomTabNavigator({
  Menu: MainScreen,
  Basket: MainScreen,
}, {
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;
      const IconComponent = Images.Main.TabBar[`${routeName}Icon`];
      return <IconComponent size={25} color={tintColor} />;
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  }),
});

const PreloadNavigator = createStackNavigator({
  Preload: {screen: PreloadScreen},
  Main: {screen: MainNavigator},
}, {
  headerMode: 'none',
  initialRouteName: 'Preload',
  mode: 'modal',
});


export default PreloadNavigator;
