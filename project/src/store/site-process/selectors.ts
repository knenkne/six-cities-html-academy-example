import { StoreSlice } from '../../const';
import type { State } from '../../types/state';
import type { City, SortName } from '../../types/types';

export const getCity = (state: State): City => state[StoreSlice.SiteProcess].city;
export const getSorting = (state: State): SortName => state[StoreSlice.SiteProcess].sorting;
