/* @flow */

import { takeLatest } from 'redux-saga/effects'

import { StartupActionTypes } from '../Actions/StartupActions'
import { ServerAPI, SettingsService } from '../Services'
import Storage from '../Utilities/Storage'
import { startup } from './StartupSagas'


const globalStorage = new Storage()
const serverAPI = ServerAPI('dmalakhov')

const settingsStorage = globalStorage.substorage('Settings')
const settingsService = SettingsService({serverAPI, settingsStorage})


export default function* root() {
    yield [
        takeLatest(StartupActionTypes.STARTUP, startup, settingsService),
    ]
}
