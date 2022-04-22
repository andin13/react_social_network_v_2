import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Preloader from './components/common/Preloader/Preloader';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActionsAndThunks } from './hooks/useActionsAndThunks';

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Users = React.lazy(() => import('./components/Users/Users'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Login = React.lazy(() => import('./components/Login/Login'));

function App() {
  const initialized = useTypedSelector((state) => state.app.initialized);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const { initializeAppThunk } = useActionsAndThunks();

  useEffect(() => initializeAppThunk(), []);

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
              <Route path="/dialogs/*" element={<Dialogs />} />
              <Route path="/profile" element={<Profile />}>
                <Route path=":userIdUrl" element={<Profile />} />
              </Route>
              <Route path="/users" element={<Users />}>
                <Route path=":currentPageUrl" element={<Users />} />
              </Route>
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/" element={<Navigate to={isAuth ? '/profile' : '/login'} />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
