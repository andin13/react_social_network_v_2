import { IUserItem } from '../../commonTypes/IUserItem';
import { apiUrls } from '../../constants/apiUrls';
import { instance, ResultCodes } from '../apiInstance';

type GetUsersResponseType = {
  items: Array<IUserItem>;
  totalCount: number;
  error: string
}

export type FollowResponseType = {
  data: null;
  resultCode: ResultCodes;
  messages: Array<string>
}

export type UnfollowResponseType = {
  data: null;
  resultCode: ResultCodes;
  messages: Array<string>
}

export const usersAPI = {
  getUsers: async (currentPage: number, pageSize = 10) => {
    const response = await instance.get<GetUsersResponseType>(
      `${apiUrls.USERS}?page=${currentPage}&count=${pageSize}`,
    );
    return response.data;
  },
  follow(id: number) {
    return instance.post<FollowResponseType>(`${apiUrls.FOLLOW}/${id}`)
      .then((response) => response.data);
  },
  unfollow(id: number) {
    return instance.delete<UnfollowResponseType>(`${apiUrls.FOLLOW}/${id}`)
      .then((response) => response.data);
  },
};
