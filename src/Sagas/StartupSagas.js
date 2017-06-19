/* @flow */

import { call, put } from 'redux-saga/effects'

import SettingsActions from '../Actions/SettingsActions'


export function* startup(settingsService, action) {
  yield call(settingsService.refresh)
  const needsToBeUpdated = yield call(settingsService.needsToBeUpdated)

  console.error(needsToBeUpdated)
}
