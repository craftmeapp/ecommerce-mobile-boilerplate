/* @flow */

import { call, put } from 'redux-saga/effects'

import SettingsActions from '../Actions/SettingsActions'


export function* startup(settingsService, catalogService, action) {
  const appSettings = yield call([settingsService, settingsService.updateAppSettings])
  if (!appSettings && !appSettings.isActual) {
    // TODO: add inactual or null application settings handling
    throw Error("Error while updating application settings!")
  }
  yield put(SettingsActions.updateAppSettings(appSettings))
  yield call([catalogService, catalogService.update])
}
