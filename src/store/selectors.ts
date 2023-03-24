import { CounterState } from './reducers/counter/types';

import { AppState } from '@/types/state';

export const getCount = (state: AppState): CounterState => state.counter;
