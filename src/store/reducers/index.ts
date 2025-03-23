/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { Dispatch, combineReducers } from '@reduxjs/toolkit';
import profileSlice from './profile';

export function createReducer(injectedReducers = {}) {

  return combineReducers({
    ...injectedReducers,
    profile: profileSlice.reducer,

  });
}

export const onUserDataClean = (dispatch: Dispatch) => {
  dispatch(profileSlice.actions.resetState());
};
