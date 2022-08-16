import store from '../store';

import type { Offer, Comment, City, SortName, User } from './types';
import { AuthorizationStatus } from '../const';


export type SiteData = {
    offers: Offer[];
    isOffersLoading: boolean;
    offer: Offer | null;
    isOfferLoading: boolean;
    favoriteOffers: Offer[];
    isFavoriteOffersLoading: boolean;
    nearbyOffers: Offer[];
    comments: Comment[];
    isCommentPending: boolean;
};

export type SiteProcess = {
    city: City;
    sorting: SortName;
}

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    user: User['email'];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
