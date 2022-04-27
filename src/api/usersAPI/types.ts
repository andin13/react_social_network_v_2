import { IUserItem } from '../../commonTypes/IUserItem';
import { ResultCodes } from '../../constants/resultCodes';

export type GetUsersResponseType = {
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
