import type { CityName } from '../../types/types';

type CityProps = {
    name: CityName,
    active: boolean;
    onClick: (name: CityName) => void;
}

const City = ({ name, active, onClick }: CityProps): JSX.Element => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <a className={`locations__item-link tabs__item${active ? ' tabs__item--active' : ''}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
};

export default City;
