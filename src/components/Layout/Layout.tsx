import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { componentsRoutes } from '../../constants/componentsRoutes';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { initializeAppThunk } from '../../toolkitRedux/slices/app/thunks';
import Preloader from '../common/Preloader/Preloader';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';

const Dialogs = React.lazy(() => import('../Dialogs/Dialogs'));
const Users = React.lazy(() => import('../Users/Users'));
const Profile = React.lazy(() => import('../Profile/Profile'));
const Login = React.lazy(() => import('../Login/Login'));

function Layout() {
  const initialized = useTypedSelector((state) => state.AppReducer.initialized);
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();

  const initializeApp = () => {
    dispatch(initializeAppThunk());
  };

  useEffect(() => initializeApp(), []);

  if (!initialized) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path={`/${componentsRoutes.DIALOGS}/*`} element={<Dialogs />} />
      <Route path={`/${componentsRoutes.PROFILE}/`} element={<Profile />}>
        <Route path=":userIdUrl" element={<Profile />} />
      </Route>
      <Route path={`/${componentsRoutes.USERS}/`} element={<Users />}>
        <Route path=":currentPageUrl" element={<Users />} />
      </Route>
      <Route path={`/${componentsRoutes.NEWS}/*`} element={<News />} />
      <Route path={`/${componentsRoutes.MUSIC}/*`} element={<Music />} />
      <Route path={`/${componentsRoutes.SETTINGS}/*`} element={<Settings />} />
      <Route path={`/${componentsRoutes.LOGIN}/*`} element={<Login />} />
      <Route path="/" element={<Navigate to={isAuth ? '/profile' : '/login'} />} />
    </Routes>
  );
}

export default Layout;
