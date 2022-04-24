import { IUser } from '../../commonTypes/IUser';
import { ApiUrls } from '../../constants/ApiUrls';
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
    const response = await instance.get<AuthMeResponseType>(`${ApiUrls.AUTH}/me`);
    return response.data;
  },
  login: async (email: string, password: string, rememberMe = false) => {
    const response = await instance.post<LoginResponseType>(
      `${ApiUrls.AUTH}/login`,
      { email, password, rememberMe },
    );
    return response.data;
  },
  logout: async () => {
    const response = await instance.delete(`${ApiUrls.AUTH}/login`);
    return response.data;
  },
};
