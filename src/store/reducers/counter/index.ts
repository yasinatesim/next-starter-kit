import { createSlice } from '@reduxjs/toolkit';

import { decrementAction, incrementAction } from './actions';
import initialState from './initialState';

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: incrementAction,
    decrement: decrementAction,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
