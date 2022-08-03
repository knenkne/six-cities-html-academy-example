import type { City } from '../types/types';

import { cities, CityLocation } from '../const';

const city: City = {
  name: cities[0],
  location: CityLocation[cities[0]]
};

export default city;
