import { cities } from '../const';

export type CityName = typeof cities[number];

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number
}

export type City = {
    name: CityName,
    location: Location
}

export type User = {
    id: number;
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type Comment = {
    id: number;
    comment: string;
    date: string;
    rating: number;
    user: User;
}

export type Offer = {
    id: number
    price: number
    rating: number
    title: string
    isPremium: boolean
    isFavorite: boolean
    location: Location
    type: 'apartment' | 'room' | 'house' | 'hotel'
}
