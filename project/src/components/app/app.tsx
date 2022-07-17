import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { City, Offer, Comment } from '../../types/types';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  city: City;
  offers: Offer[];
  reviews: Comment[];
};

const App = ({ city, offers, reviews }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main city={city} offers={offers} />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={`${AppRoute.Property}/:id`} element={<Property city={city} nearbyOffers={offers} reviews={reviews} />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
