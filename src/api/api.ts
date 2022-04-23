import axios from 'axios';

import { IUser } from '../commonTypes/IUser';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '41d75a6f-e250-4501-b54b-f819ffc5379d',
  },
});

export enum ResultCodes {
  Success = 0,
  Error = 1
}

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

export const profileAPI = {
  getProfile: async (userId: number) => {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  getStatus: async (userId: number) => {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  updateStatus: async (status: string) => {
    const response = await instance.put('profile/status/', { status });
    if (status) return response;
    return null;
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const usersAPI = {
  getUsers: async (currentPage: number, pageSize = 10) => {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  follow(id: number) {
    return instance.post(`follow/${id}`)
      .then((response) => response.data);
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`)
      .then((response) => response.data);
  },
};
