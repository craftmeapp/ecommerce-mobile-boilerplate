/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import StartupActions from '../Actions/StartupActions'
import { Image, View } from '../Components/Base'
import { Images } from '../Theme'


const MainView = View.extend``
const LogoView = View.extend`
  margin: 50px
`
const LogoImage = Image.extend`
  height: 100%
  width: 100%
`


export class PreloadScreen extends Component {
  render() {
    return (
      <MainView>
        <LogoView>
          <LogoImage source={Images.preload.centerLogo} resizeMode='contain' resizeMethod='resize'/>
        </LogoView>
      </MainView>
    )
  }

  componentDidMount() {
    this.props.startup()
  }
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})


export default connect(null, mapDispatchToProps)(PreloadScreen)
