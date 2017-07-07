/* @flow */

import React, { Component, PropTypes } from 'react'

import { StatusBar, View } from '../Components/Base'
import { NativeRouter, Route, Redirect } from 'react-router-native'
import { connect } from 'react-redux'
import PreloadScreen from './PreloadScreen'
import CategoryScreen from './CategoryScreen'

export class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToRefferer: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      redirectToRefferer: this.props.routeName !== nextProps.routeName,
    });
  }

  render() {
    const redirect = this.state.redirectToRefferer
      ? <Redirect to={{ pathname: this.props.routeName }} />
      : null;

    return (
      <NativeRouter>
        <View>
          <StatusBar/>
          <Route exact path="/" component={PreloadScreen}/>
          <Route path="/category" component={CategoryScreen}/>
          {redirect}
        </View>
      </NativeRouter>
    )
  }
}

Root.displayName = 'Root'

const mapStateToProps = ({navigation}) => ({
  routeName: navigation.routeName,
})

export default connect(mapStateToProps)(Root)
