import React from 'react';
import { Navigate } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import LoginForm from './LoginForm/LoginForm';

function Login(): JSX.Element {
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);

  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
