import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { logoutThunk } from '../../toolkitRedux/reducers/auth/thunks';

import s from './Header.module.css';

function Header(): JSX.Element {
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);
  const login = useTypedSelector((state) => state.AuthReducer.user?.login);
  const logoUrl = 'https://cdn.dribbble.com/users/10882/screenshots'
  + '/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300';

  return (
    <header className={s.header}>
      <NavLink className={s.logo} to="/">
        <img src={logoUrl} alt="" />
      </NavLink>
      <div className={s.loginBlock}>
        { isAuth
          ? (
            <div>
              {login}
              <button
                onClick={logoutThunk}
                type="button"
              >
                Logout
              </button>
            </div>
          )
          : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
