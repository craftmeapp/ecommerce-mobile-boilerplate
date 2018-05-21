// @flow

import {NavigationActions} from 'react-navigation';
import {handleActions} from 'redux-actions';

import {Navigator} from '../../Navigation';

import actions from './Actions';


const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('PreloadScreen'));

const reducer = handleActions({
  [actions.navigate](state, {payload: routeName}) {
    return Navigator.router.getStateForAction(
      NavigationActions.navigate({routeName}),
      state,
    );
  },
}, initialState);


export default reducer;
