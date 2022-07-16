import { useState } from 'react';

import type { Offer } from '../../types/types';

import Card from '../card/card';

type CardListProps = {
    offers: Offer[];
};

const CardList = ({ offers }: CardListProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
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
  );
};

export default CardList;
