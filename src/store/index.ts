import { configureStore } from '@reduxjs/toolkit';

import counter from '@/store/reducers/counter';

export const store = configureStore({
  reducer: {
    counter,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
