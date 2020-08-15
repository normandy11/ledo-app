import {createAction} from '@reduxjs/toolkit';

import * as types from './types';

export const increment = createAction(types.INCREMENT);

export const decrement = createAction(types.DECREMENT);

export const reset = createAction(types.RESET);

export const incrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: types.INCREMENT_ASYNC,
    });
  }, 2000);
};
