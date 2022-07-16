import City from '../city/city';
import { cities } from '../../const';

export const CitiesList = (): JSX.Element => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <City key={city} name={city} active={city === 'Amsterdam'} />
    ))}
  </ul>
);
