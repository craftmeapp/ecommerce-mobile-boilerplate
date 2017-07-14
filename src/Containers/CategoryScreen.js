import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import CategoryList from '../Components/CategoryList'


export default class MainScreen extends Component {
  static navigationOptions = { title: 'Main' }

  render() {
    return (
      <CategoryList
        data={['row 1', 'row 2']}
        renderItem={({item}) => <Text>{item}</Text>}/>
    )
  }
}