import { authAPI, ResultCodes } from '../../../api/api';
import { IUser } from '../../../commonTypes/IUser';
import { AppDispatch } from '../../store';

import { logout, setUserData } from './slice';

export const authMeThunk = () => async (dispatch: AppDispatch) => {
  const data = await authAPI.authMe();
  if (data.resultCode === ResultCodes.Success) {
    const { id, login, email }: IUser = data.data;
    dispatch(setUserData({ id, email, login }));
  }
};

export const loginThunk = (
  email: string,
  password: string,
  rememberMe: boolean,
) => async (dispatch: AppDispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === ResultCodes.Success) {
    dispatch(authMeThunk());
  }
};

export const logoutThunk = () => async (dispatch: AppDispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(logout());
  }
};
