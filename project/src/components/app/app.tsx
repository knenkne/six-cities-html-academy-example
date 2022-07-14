import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  offersCount: number
}

const App = ({ offersCount }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main offersCount={offersCount} />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/offer/:id" element={<Property />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
