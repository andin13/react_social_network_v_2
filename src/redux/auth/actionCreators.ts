import { IUser } from '../commonTypes/IUser';
import { AuthAction, AuthActionTypes } from './types';

export const setUserDataAction = (
  payload: IUser,
):AuthAction => ({ type: AuthActionTypes.SET_USER_DATA, payload });

export const logoutAction = ():AuthAction => ({ type: AuthActionTypes.LOGOUT });
