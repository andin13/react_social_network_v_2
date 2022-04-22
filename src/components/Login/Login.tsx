import { Navigate } from 'react-router-dom';
import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActionsAndThunks } from '../../hooks/useActionsAndThunks';

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
