import { IUser } from '../../commonTypes/IUser';
import { instance } from '../apiInstance';

type AuthMeResponseType = {
    data: IUser;
    resultCode: ResultCodes;
    messages: Array<string>
  }

type LoginResponseType = {
    data: {
      userId: number;
    };
    resultCode: ResultCodes;
    messages: Array<string>
  }

export enum ResultCodes {
    Success = 0,
    Error = 1
  }

export const authAPI = {
  authMe: async () => {
    const response = await instance.get<AuthMeResponseType>('auth/me');
    return response.data;
  },
  login: async (email: string, password: string, rememberMe = false) => {
    const response = await instance.post<LoginResponseType>(
      'auth/login',
      { email, password, rememberMe },
    );
    return response.data;
  },
  logout: async () => {
    const response = await instance.delete('auth/login');
    return response.data;
  },
};
