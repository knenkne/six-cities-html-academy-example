import type { Sort } from '../../types/types';

import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSorting } from '../../store/action';
import { Comprator } from '../../const';
import Card from '../card/card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

const CardList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name).sort(Comprator[state.sorting]));
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: Sort) => {
    dispatch(setSorting(name));
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <Sorting onChange={onSortingChange} activeSorting={activeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              {...offer}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map locations={offers.map(({ id, location }) => ({ id, ...location }))} city={activeCity} activeOffer={activeOffer} />
      </div>
    </>
  );
};

export default CardList;
