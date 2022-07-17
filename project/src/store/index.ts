import { configureStore } from '@reduxjs/toolkit';

import { updateStore } from './reducer';
import { setOffers } from './action';
import offers from '../mocks/offers';

const store = configureStore({
  reducer: updateStore
});

store.dispatch(setOffers(offers));

export default store;
