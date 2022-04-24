import { ApiUrls } from '../../constants/ApiUrls';
import { instance } from '../apiInstance';

export const usersAPI = {
  getUsers: async (currentPage: number, pageSize = 10) => {
    const response = await instance.get(`${ApiUrls.USERS}?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  follow(id: number) {
    return instance.post(`${ApiUrls.FOLLOW}/${id}`)
      .then((response) => response.data);
  },
  unfollow(id: number) {
    return instance.delete(`${ApiUrls.FOLLOW}/${id}`)
      .then((response) => response.data);
  },
};
