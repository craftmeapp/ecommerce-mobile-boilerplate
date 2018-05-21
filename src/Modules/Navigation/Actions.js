// @flow

import {createActions} from 'redux-actions';


const actions = createActions({
  NAVIGATION: {
    NAVIGATE: routeName => routeName,
  },
}).navigation;

export const {navigate} = actions;

export default actions;
