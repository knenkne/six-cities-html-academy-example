import { cities } from '../const';

export type CityName = typeof cities[number];

export type Offer = {
    id: number;
    price: number;
    rating: number;
    title: string;
    isPremium: boolean;
    isFavorite: boolean;
    city: {
        name: CityName
    };
    type: 'apartment' | 'room' | 'house' | 'hotel';
};
