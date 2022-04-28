import React from 'react';
import { Navigate } from 'react-router-dom';

import { componentsRoutes } from '../../constants/componentsRoutes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import LoginForm from './LoginForm/LoginForm';

function Login(): JSX.Element {
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);

  if (isAuth) {
    return <Navigate to={`/${componentsRoutes.PROFILE}`} />;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
