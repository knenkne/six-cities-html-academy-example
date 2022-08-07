import { AuthorizationStatus, StoreSlice } from '../../const';
import type { State } from '../../types/state';
import type { User } from '../../types/types';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[StoreSlice.UserProcess].authorizationStatus;
export const getUser = (state: State): User['email'] => state[StoreSlice.UserProcess].user;
