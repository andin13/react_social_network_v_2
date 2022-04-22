/* eslint-disable default-param-last */
import { AuthAction, AuthActionTypes, AuthState } from './types';

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
