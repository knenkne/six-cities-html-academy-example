import { createAction } from '@reduxjs/toolkit';

import type { CityName, Offer } from '../types/types';

export const Action = {
  SET_CITY: 'city/set',
  SET_OFFERS: 'offers/set'
};

// TODO: сократить до generic
// export const setCity = createAction(Action.SET_CITY, (city) => ({
//   payload: city,
// }));
export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);


