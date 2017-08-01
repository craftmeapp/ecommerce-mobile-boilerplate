/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StatusBar, View } from '../Components/Base';
import { NavigatorWithState } from '../Navigation';


export class _Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <StatusBar />
        <NavigatorWithState />
      </View>
    );
  }
}

const mapDispathToProps = dispatch => ({});


export default connect(null, mapDispathToProps)(_Root);
