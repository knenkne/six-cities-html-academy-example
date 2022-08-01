import { Offer, Location, CityName, Sort } from './types/types';

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

export const STARS_COUNT = 5;
export const MAX_PERCENT_STARS_WIDTH = 100;

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Property = '/offer',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum Sorting {
  POPULAR = 'Popular',
  PRICE_INCREASE = 'Price: low to high',
  PRICE_DECREASE = 'Price: high to low',
  TOP_RATED = 'Top rated first',
}

export const Comprator: {
  [key in Sort]: (a: Offer, b: Offer) => number
} = {
  POPULAR: () => 0,
  PRICE_INCREASE: (a, b) => a.price - b.price,
  PRICE_DECREASE: (a, b) => b.price - a.price,
  TOP_RATED: (a, b) => b.rating - a.rating,
};

type CityLocation = {
  [key in CityName]: Location
}

export const CityCenter: CityLocation = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 10
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 10
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 10
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 10
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 10
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 10
  },
};
