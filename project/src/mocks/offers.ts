import type { Offer } from '../types/types';

const offers: Offer[] = [
  {
    id: 1,
    price: 200,
    rating: 4.4,
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    isFavorite: false,
    city: {
      name: 'Amsterdam'
    },
    type: 'apartment'
  },
  {
    id: 2,
    price: 20,
    rating: 3.4,
    title: 'A apartment at great location beautiful',
    isPremium: false,
    isFavorite: false,
    city: {
      name: 'Paris'
    },
    type: 'room'
  },
  {
    id: 3,
    price: 100,
    rating: 5.0,
    title: 'Great location apartment at great location',
    isPremium: true,
    isFavorite: true,
    city: {
      name: 'Cologne'
    },
    type: 'house'
  },
  {
    id: 4,
    price: 100,
    rating: 3.2,
    title: 'Luxurious & beautiful apartment at great location',
    isPremium: false,
    isFavorite: true,
    city: {
      name: 'Hamburg'
    },
    type: 'hotel'
  },
];

export default offers;
