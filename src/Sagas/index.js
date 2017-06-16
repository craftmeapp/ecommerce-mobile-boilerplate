/* @flow */

import { takeLatest } from 'redux-saga/effects'

import { StartupActionTypes } from '../Actions/StartupActions'
import { startup } from './StartupSagas'


export default function* root() {
    yield [
        takeLatest(StartupActionTypes.STARTUP, startup),
    ]
}