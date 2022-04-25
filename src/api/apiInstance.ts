import axios from 'axios';

export enum ResultCodes {
  Success = 0,
  Error = 1
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '41d75a6f-e250-4501-b54b-f819ffc5379d',
  },
});
