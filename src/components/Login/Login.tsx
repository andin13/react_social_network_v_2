import React from 'react';
import { Navigate } from 'react-router-dom';

import { useActionsAndThunks } from '../../hooks/useActionsAndThunks';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import LoginForm from './LoginForm/LoginForm';

function Login(): JSX.Element {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const { loginThunk } = useActionsAndThunks();

  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm login={loginThunk} />
    </div>
  );
}

export default Login;
