import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { componentsRoutes } from '../../../constants/componentsRoutes';
import { picturesUrls } from '../../../constants/picturesUrls';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { logoutThunk } from '../../../redux/slices/auth/thunks';

import s from './Header.module.css';

function Header(): JSX.Element {
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);
  const login = useTypedSelector((state) => state.AuthReducer.user?.login);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutThunk());
  };

  return (
    <header className={s.header}>
      <NavLink className={s.logo} to="/">
        <img src={picturesUrls.LOGO} alt="" />
      </NavLink>
      <div className={s.loginBlock}>
        { isAuth
          ? (
            <div>
              {login}
              <button
                onClick={logout}
                type="button"
              >
                Logout
              </button>
            </div>
          )
          : <NavLink to={`/${componentsRoutes.LOGIN}`}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
