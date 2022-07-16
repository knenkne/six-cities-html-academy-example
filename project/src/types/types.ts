export type Offer = {
    id: number;
    price: number;
    rating: number;
    title: string;
    isPremium: boolean;
    isFavorite: boolean;
    type: 'apartment' | 'room' | 'house' | 'hotel';
};
