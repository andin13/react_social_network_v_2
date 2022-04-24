import { apiUrls } from '../../constants/apiUrls';
import { instance } from '../apiInstance';

export const usersAPI = {
  getUsers: async (currentPage: number, pageSize = 10) => {
    const response = await instance.get(`${apiUrls.USERS}?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  follow(id: number) {
    return instance.post(`${apiUrls.FOLLOW}/${id}`)
      .then((response) => response.data);
  },
  unfollow(id: number) {
    return instance.delete(`${apiUrls.FOLLOW}/${id}`)
      .then((response) => response.data);
  },
};
