import { apiUrls } from '../../constants/apiUrls';
import { instance } from '../apiInstance';

import { AuthMeResponseType, LoginResponseType, LogoutResponseType } from './types';

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
