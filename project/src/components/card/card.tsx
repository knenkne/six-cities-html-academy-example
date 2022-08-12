import { memo } from 'react';
import { Link } from 'react-router-dom';

import type { Offer } from '../../types/types';
import { AppRoute } from '../../const';
import { getStarsWidth } from '../../utils';
import Bookmark from '../bookmark/bookmark';

type CardProps = Offer & {
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
  place?: 'cities' | 'favorites' | 'near-places';
};

const Card = ({
  id,
  price,
  rating,
  title,
  isPremium,
  isFavorite,
  previewImage,
  type,
  place = 'cities',
  onMouseEnter = () => void 0,
  onMouseLeave = () => void 0,
}: CardProps): JSX.Element => {
  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  return (
    <article
      className={`${place}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={place === 'favorites' ? 150 : 260}
            height={place === 'favorites' ? 110 : 200}
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark id={id} isActive={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: getStarsWidth(rating),
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default memo(Card, (prevProps, nextProps) => prevProps.isFavorite === nextProps.isFavorite);
