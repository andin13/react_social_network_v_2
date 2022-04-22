import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '41d75a6f-e250-4501-b54b-f819ffc5379d',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`)
      .then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return status && instance.put('profile/status/', { status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const authAPI = {
  authMe() {
    return instance.get('auth/me')
      .then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete('auth/login')
      .then((response) => response.data);
  },
};
