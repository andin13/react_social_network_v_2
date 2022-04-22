import { ThunkAction } from 'redux-thunk';

import { authAPI, ResultCodes } from '../../api/api';
import { IUser } from '../../commonTypes/IUser';
import { RootState } from '../rootReducer';

import { logoutAction, setUserDataAction } from './actionCreators';
import { AuthAction } from './types';

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, AuthAction>;

export const authMeThunk = (): ThunkType => async (dispatch) => {
  const data = await authAPI.authMe();
  if (data.resultCode === ResultCodes.Success) {
    const { id, login, email }: IUser = data.data;
    dispatch(setUserDataAction({ id, email, login }));
  }
};

export const loginThunk = (
  email: string,
  password: string,
  rememberMe: boolean,
): ThunkType => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === ResultCodes.Success) {
    dispatch(authMeThunk());
  }
};

export const logoutThunk = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(logoutAction());
  }
};
