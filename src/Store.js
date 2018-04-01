/* @flow */

import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import application from './Reducer';
import navigation from './Modules/Navigation/Reducer';
import settings from './Modules/Settings/Reducer';
import { middleware as navigationMiddleware } from './Navigation/Navigator';


export default () => {
  const rootReducer = combineReducers({
    application,
    navigation,
    settings,
  });

  return createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
        navigationMiddleware,
      ),
    ),
  );
};
