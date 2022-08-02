import { createReducer } from '@reduxjs/toolkit';

import type { City, Offer, SortName } from '../types/types';

import { setCity, setOffers, setSorting } from './action';
import { cities, CityCenter } from '../const';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityCenter[cities[0]],
  },
  offers: [],
  sorting: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload],
      };
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
