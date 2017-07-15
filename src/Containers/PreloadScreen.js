/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartupActions from '../Actions/StartupActions';
import { Image, View } from '../Components/Base';
import { Images } from '../Theme';


const MainView = View.extend``;
const LogoView = View.extend`
  margin: 50px
`;
const LogoImage = Image.extend`
  height: 100%
  width: 100%
`;

class PreloadScreen extends Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    return (
      <MainView>
        <LogoView>
          <LogoImage
            source={Images.preload.centerLogo}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </LogoView>
      </MainView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});


export default connect(null, mapDispatchToProps)(PreloadScreen);
