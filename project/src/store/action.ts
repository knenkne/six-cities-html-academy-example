import { createAction } from '@reduxjs/toolkit';

export const Action = {
  SET_CITY: 'SET_CITY'
};

export const setCityAction = createAction(Action.SET_CITY, (city) => ({
  payload: city,
}));
