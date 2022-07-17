import type { City } from '../types/types';

import { cities, CityCenter } from '../const';

const city: City = {
  name: cities[0],
  location: CityCenter[cities[0]]
};

export default city;
