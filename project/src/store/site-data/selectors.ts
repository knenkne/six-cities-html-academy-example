import { createSelector } from '@reduxjs/toolkit';

import type { State } from '../../types/state';
import type { Offer, Comment } from '../../types/types';
import { Comprator, StoreSlice } from '../../const';
import { getCity, getSorting } from '../site-process/selectors';


export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.offers;

export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOfferLoading;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer | null => SITE_DATA.offer;

export const getNearbyOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.nearbyOffers;
export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Comment[] => SITE_DATA.comments;

export const selectOffers = createSelector(
  [getOffers, getCity, getSorting],
  (offers, city, sorting) => offers.filter((offer) => offer.city.name === city.name).sort(Comprator[sorting])
);
