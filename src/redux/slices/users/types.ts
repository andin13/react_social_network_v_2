import { IUserItem } from '../../../commonTypes/IUserItem';

export interface UsersState {
    users: Array<IUserItem>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}

export type ToggleIsFollowingProgressPayload = {
    isFetching: boolean;
    userId: number
};
