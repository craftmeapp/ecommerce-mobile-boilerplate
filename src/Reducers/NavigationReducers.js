// @flow

import { NavigationActions } from 'react-navigation';
import { createReducer } from 'reduxsauce'

import { NavigationActionTypes } from '../Actions/NavigationActions'

const INITIAL_STATE = {
  routeName: '/',
}

const navigate = (state, {routeName}) => ({ routeName })

export const reducer = createReducer(INITIAL_STATE, {
  [NavigationActionTypes.NAVIGATE]: navigate,
})

export default reducer
