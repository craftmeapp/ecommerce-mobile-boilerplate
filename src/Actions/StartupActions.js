/* @flow */

import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({
  startup: null,
})


export const StartupActionTypes = Types
export default Creators