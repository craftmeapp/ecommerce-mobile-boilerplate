// @flow

import { NavigationActions } from 'react-navigation';
import Immutable from 'seamless-immutable';
import { createActions, handleActions } from 'redux-actions';

import { Navigator } from '../../Navigation';


const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('PreloadScreen'));

export const actions = createActions({ NAVIGATION: {
  NAVIGATE: (routeName) => routeName,
}}).navigation;

const reducer = handleActions({
  [actions.navigate](state, { payload: routeName }) {
    return Navigator.router.getStateForAction(
      NavigationActions.navigate({ routeName }),
      state,
    );
  },
}, initialState);


export default reducer;
