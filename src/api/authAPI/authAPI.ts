import { IUser } from '../../commonTypes/IUser';
import { apiUrls } from '../../constants/apiUrls';
import { instance, ResultCodes } from '../apiInstance';

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

type LogoutResponseType = {
  resultCode: ResultCodes;
  messages: Array<string>
}

export const authAPI = {
  authMe: async () => {
    const response = await instance.get<AuthMeResponseType>(`${apiUrls.AUTH}/me`);
    return response.data;
  },
  login: async (email: string, password: string, rememberMe = false) => {
    const response = await instance.post<LoginResponseType>(
      `${apiUrls.AUTH}/login`,
      { email, password, rememberMe },
    );
    return response.data;
  },
  logout: async () => {
    const response = await instance.delete<LogoutResponseType>(`${apiUrls.AUTH}/login`);
    return response.data;
  },
};
