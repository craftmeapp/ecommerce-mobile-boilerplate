/* @flow */

import { put } from 'redux-saga/effects'

import SettingsActions from '../Actions/SettingsActions'


export function* startup(action) {
  console.log('Startup!')
  yield put(SettingsActions.update())
}