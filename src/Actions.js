// @flow

import { actions } from './Reducer';

export const startup = () => (dispatch) => {
  dispatch(actions.update.started());
  dispatch(actions.update.finished());
};
