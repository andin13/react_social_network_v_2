import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function withAuthRedirect(Component) {
  function RedirectComponent() {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component />;
  }

  return RedirectComponent;
}
