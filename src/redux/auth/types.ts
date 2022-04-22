import { IUser } from '../../commonTypes/IUser';

export interface AuthState {
    user: IUser | null;
    isAuth: boolean;
}

export enum AuthActionTypes {
    SET_USER_DATA = 'SET_USER_DATA',
    LOGOUT = 'LOGOUT'
}

interface SetUserDataAction {
    type: AuthActionTypes.SET_USER_DATA;
    payload: IUser;
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}

export type AuthAction = SetUserDataAction | LogoutAction;
