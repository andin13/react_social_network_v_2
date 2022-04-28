import { authAPI } from '../../../api/authAPI/authAPI';
import { IUser } from '../../../commonTypes/IUser';
import { ResultCodes } from '../../../constants/resultCodes';
import { AppDispatch } from '../../store';

import { authActions } from './slice';

export const authMeThunk = () => async (dispatch: AppDispatch) => {
  const data = await authAPI.authMe();
  if (data.resultCode === ResultCodes.Success) {
    const { id, login, email }: IUser = data.data;
    dispatch(authActions.setUserData({ id, email, login }));
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
  if (data.resultCode === ResultCodes.Success) {
    dispatch(authActions.logout());
  }
};
