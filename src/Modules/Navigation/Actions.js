// @flow

import { createActions } from 'redux-actions';


const actions = createActions({ NAVIGATION: {
  NAVIGATE: (routeName) => routeName,
}}).navigation;

export const navigate = actions.navigate;

export default actions;
