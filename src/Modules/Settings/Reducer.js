// @flow

import { createActions, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
  appSettings: null,
});

export const actions = createActions({ SETTINGS: {
  UPDATE: (appSettings) => appSettings,
}}).settings;

const reducer = handleActions({
  [actions.update](state, {payload: appSettings}) {
    return state.merge({ appSettings });
  },
}, initialState);


export default reducer;
