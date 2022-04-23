export interface UsersState {
    users: Array<any>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>,
}

export type ToggleIsFollowingProgressPayload = {
    isFetching: boolean;
    userId: number
};
