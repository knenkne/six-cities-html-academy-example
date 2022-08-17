import { Link, Outlet, useLocation } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/site-data/selectors';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';
import { logout } from '../../store/user-process/user-process';

const RootClassName: Record<AppRoute, string> = {
  [AppRoute.Root]: 'page--gray page--main',
  [AppRoute.Login]: 'page--gray page--login',
  [AppRoute.Favorites]: '',
  [AppRoute.Property]: '',
  [AppRoute.NotFound]: '',
};

const Header = () => {
  const { pathname } = useLocation() as { pathname: AppRoute };
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const handleLogoutClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logout());
    }
  };

  return (
    <div className={`page ${RootClassName[pathname]}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        {user}
                      </span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>)}
                {pathname !== AppRoute.Login && (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={authorizationStatus === AuthorizationStatus.Auth ? AppRoute.Root : AppRoute.Login} onClick={handleLogoutClick}>
                      <span className="header__signout">{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</span>
                    </Link>
                  </li>)}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
