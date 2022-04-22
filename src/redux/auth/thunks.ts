import { Dispatch } from 'redux';
import { IUser } from '../commonTypes/IUser';
import { setUserDataAction, logoutAction } from './actionCreators';
import { AuthAction } from './types';
import { authAPI } from '../../api/api';

export const authMeThunk = () => async (dispatch: Dispatch<AuthAction>) => {
  const data = await authAPI.authMe();
  if (data.resultCode === 0) {
    const { id, login, email }: IUser = data.data;
    dispatch(setUserDataAction({ id, email, login }));
  }
};

export const loginThunk = (
  email: string,
  password: string,
  rememberMe: boolean,
) => async (dispatch: Dispatch<any>) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(authMeThunk());
  }
};

export const logoutThunk = () => async (dispatch: Dispatch<AuthAction>) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(logoutAction());
  }
};
