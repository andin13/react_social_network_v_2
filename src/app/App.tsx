import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Preloader from '../components/common/Preloader/Preloader';
import Header from '../components/Header/Header';
import Music from '../components/Music/Music';
import Navbar from '../components/Navbar/Navbar';
import News from '../components/News/News';
import Settings from '../components/Settings/Settings';
import { componentsRoutes } from '../constants/componentsRoutes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { initializeAppThunk } from '../toolkitRedux/slices/app/thunks';

import './App.css';

const Dialogs = React.lazy(() => import('../components/Dialogs/Dialogs'));
const Users = React.lazy(() => import('../components/Users/Users'));
const Profile = React.lazy(() => import('../components/Profile/Profile'));
const Login = React.lazy(() => import('../components/Login/Login'));

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
    <div className="app-wrapper">
      <Header />
      <div className="main-content">
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
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
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
