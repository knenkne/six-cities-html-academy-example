import type { State } from '../../types/state';
import type { Offer, Comment } from '../../types/types';
import { Comprator, StoreSlice } from '../../const';


export const getIsOffersLoading = (state: State): boolean => state[StoreSlice.SiteData].isOffersLoading;
export const getOffers = (state: State): Offer[] =>
  state[StoreSlice.SiteData].offers
    .filter((offer) => offer.city.name === state[StoreSlice.SiteProcess].city.name)
    .sort(Comprator[state[StoreSlice.SiteProcess].sorting]);

export const getIsOfferLoading = (state: State): boolean => state[StoreSlice.SiteData].isOfferLoading;
export const getOffer = (state: State): Offer | null => state[StoreSlice.SiteData].offer;

export const getNearbyOffers = (state: State): Offer[] => state[StoreSlice.SiteData].nearbyOffers;
export const getComments = (state: State): Comment[] => state[StoreSlice.SiteData].comments;
