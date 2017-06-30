/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StatusBar, View } from '../Components/Base'
import { NavigatorWithState } from '../Navigation'


export class Root extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <StatusBar/>
        <NavigatorWithState/>
      </View>
    )
  }
}

const mapDispathToProps = (dispatch) => {
  return {}
}


export default connect(null, mapDispathToProps)(Root)
