import { instance } from '../apiInstance';

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
