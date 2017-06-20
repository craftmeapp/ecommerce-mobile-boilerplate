/* @flow */

import { call, put } from 'redux-saga/effects'

import SettingsActions from '../Actions/SettingsActions'


export function* startup(settingsService, catalogService, action) {
  yield call([settingsService, settingsService.update])
  yield call([catalogService, catalogService.update])
}
