import { CounterState } from './types';

export const incrementAction = (state: CounterState) => {
  state.value += 1;
};

export const decrementAction = (state: CounterState) => {
  state.value -= 1;
};
