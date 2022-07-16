export const STARS_COUNT = 5;
export const MAX_PERCENT_STARS_WIDTH = 100;
export const cities = ['Paris', 'Cologne', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Property = '/offer',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
