import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../api';
import { reducer } from './reducer';
import { fetchOffers } from './action';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(fetchOffers());

export default store;
