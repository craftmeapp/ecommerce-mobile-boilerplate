/* @flow */

import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  startUpdating: null,
  finishUpdating: null,
  updateAppSettings: ['appSettings'],
});


export const SettingsActionTypes = Types;
export default Creators;
