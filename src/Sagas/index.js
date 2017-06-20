/* @flow */

import { takeLatest } from 'redux-saga/effects'

import { StartupActionTypes } from '../Actions/StartupActions'
import { CatalogService, ServerAPI, SettingsService } from '../Services'
import Storage from '../Utilities/Storage'
import { startup } from './StartupSagas'


const globalStorage = Storage.create()
const serverAPI = ServerAPI.create('dmalakhov')

const settingsStorage = globalStorage.substorage('Settings')
const settingsService = SettingsService.create({storage: settingsStorage,
    serverAPI})

const catalogStorage = globalStorage.substorage('Catalog')
const catalogService = CatalogService.create({storage: catalogStorage,
    serverAPI, settingsService})


export default function* root() {
    yield [
        takeLatest(StartupActionTypes.STARTUP, startup, settingsService, catalogService),
    ]
}
