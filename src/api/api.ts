import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '41d75a6f-e250-4501-b54b-f819ffc5379d',
  },
});

export const authAPI = {
  authMe: async () => {
    const response = await instance.get('auth/me');
    return response.data;
  },
  login: async (email: string, password: string, rememberMe = false) => {
    const response = await instance.post('auth/login', { email, password, rememberMe });
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
  updateStatus(status: string) {
    return status && instance.put('profile/status/', { status });
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
  getUsers: async (currentPage = 1, pageSize = 10) => {
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
