/* @flow */

import { takeLatest } from 'redux-saga/effects'

import { StartupActionTypes } from '../Actions/StartupActions'
import { CatalogService, ServerAPI, SettingsService } from '../Services'
import Storage from '../Utilities/Storage'
import { startup } from './StartupSagas'


const globalStorage = new Storage()
const serverAPI = ServerAPI('dmalakhov')

const settingsStorage = globalStorage.substorage('Settings')
const settingsService = SettingsService({storage: settingsStorage, 
    serverAPI})

const catalogStorage = globalStorage.substorage('Catalog')
const catalogService = new CatalogService(catalogStorage, 
    serverAPI, settingsService)


export default function* root() {
    yield [
        takeLatest(StartupActionTypes.STARTUP, startup, settingsService, catalogService),
    ]
}
