import { useState } from 'react';

import { useAppSelector } from '../../hooks';

import Card from '../card/card';

const CardList = (): JSX.Element => {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {activeCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
                        Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li
            className="places__option places__option--active"
            tabIndex={0}
          >
                            Popular
          </li>
          <li className="places__option" tabIndex={0}>
                            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
                            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
                            Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            {...offer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;