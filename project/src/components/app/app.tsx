import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { Offer } from '../../types/types';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  offers: Offer[],
  offersCount: number
}

const App = ({ offers, offersCount }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main offers={offers} offersCount={offersCount} />}/>
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={`${AppRoute.Property}/:id`} element={<Property />} />
      <Route path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
