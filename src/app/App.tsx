import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Preloader from '../components/Preloader/Preloader';
import { componentsRoutes } from '../constants/componentsRoutes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Music from '../pages/Music';
import News from '../pages/News';
import Settings from '../pages/Settings';
import { initializeAppThunk } from '../redux/slices/app/thunks';

import Layout from './Layout/Layout';

import './App.css';

const Dialogs = React.lazy(() => import('../pages/Dialogs/index'));
const Users = React.lazy(() => import('../pages/Users'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Login = React.lazy(() => import('../pages/Login'));

function App() {
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
    <Layout>
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
        <Route
          path="/"
          element={(
            <Navigate to={isAuth
              ? `/${componentsRoutes.PROFILE}/`
              : `/${componentsRoutes.LOGIN}/*`}
            />
)}
        />
      </Routes>
    </Layout>
  );
}

export default App;
