/* @flow */

import { call, put } from 'redux-saga/effects'

import SettingsActions from '../Actions/SettingsActions'


export function* startup(settingsService, action) {
  const res = yield call(settingsService.checkForUpdate)
  console.log(res.data)
}
