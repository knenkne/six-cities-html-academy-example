import type { CityName } from '../../types/types';

type CityProps = {
    name: CityName,
    active: boolean;
}

const City = ({ name, active }: CityProps): JSX.Element => (
  <li className="locations__item">
    <a className={`locations__item-link tabs__item${active ? ' tabs__item--active' : ''}`} href="#">
      <span>{name}</span>
    </a>
  </li>
);

export default City;
