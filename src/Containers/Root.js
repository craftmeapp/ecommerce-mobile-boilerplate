// @flow

import React from 'react';

import {NavigatorWithState} from '../Navigation';
import {StatusBar, View} from '../Components/Base';


const Root = () => (
  <View>
    <StatusBar />
    <NavigatorWithState />
  </View>
);


export default Root;
