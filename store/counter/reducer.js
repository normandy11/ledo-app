import {createReducer} from '@reduxjs/toolkit';

import * as types from './types';

export default createReducer(2, {
  [types.INCREMENT]: (state) => state + 1,
  [types.DECREMENT]: (state) => state - 1,
  [types.RESET]: () => 0,
  [types.INCREMENT_ASYNC]: (state) => state + 1,
});
