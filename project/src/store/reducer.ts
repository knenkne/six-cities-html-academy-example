
import { createReducer } from '@reduxjs/toolkit';

import type { CityName, Offer } from '../types/types';

import { setCity, setOffers } from './action';
import { cities } from '../const';

type State = {
    city: CityName,
    offers: Offer[]
}

const initialState: State = {
  city: cities[0],
  offers: []
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
