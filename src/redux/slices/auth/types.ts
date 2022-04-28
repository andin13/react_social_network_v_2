import { IUser } from '../../../commonTypes/IUser';

export interface AuthState {
    user: IUser | null;
    isAuth: boolean;
}
