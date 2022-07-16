
import { createReducer } from '@reduxjs/toolkit';

import { setCityAction } from './action';
import city from '../mocks/city';
import offers from '../mocks/offers';

const initialState = {
  city,
  offers
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
    });
});
