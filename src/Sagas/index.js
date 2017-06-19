/* @flow */

import { takeLatest } from 'redux-saga/effects'

import { StartupActionTypes } from '../Actions/StartupActions'
import { ServerAPI, SettingsService } from '../Services'
import { startup } from './StartupSagas'


const settingsService = SettingsService(ServerAPI('dmalakhov'))


export default function* root() {
    yield [
        takeLatest(StartupActionTypes.STARTUP, startup, settingsService),
    ]
}