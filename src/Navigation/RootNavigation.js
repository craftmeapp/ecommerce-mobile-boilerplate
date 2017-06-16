/* @flow */

import { StackNavigator } from 'react-navigation'

import MainScreen from '../Containers/MainScreen'
import PreloadScreen from '../Containers/PreloadScreen'


const Navigator = StackNavigator({
  PreloadScreen: { screen: PreloadScreen },
  MainScreen: { screen: MainScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'PreloadScreen',
})


export default Navigator

