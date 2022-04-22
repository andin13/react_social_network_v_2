export interface UsersState {
    users: Array<any>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>,
}

export enum UsersActionTypes {
    FOLLOW_SUCCESS = 'FOLLOW_SUCCESS',
    UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS',
    SET_USERS = 'SET_USERS',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS',
}

interface FollowSuccessAction {
    type: UsersActionTypes.FOLLOW_SUCCESS;
    payload: number;
}

interface UnfollowSuccessAction {
    type: UsersActionTypes.UNFOLLOW_SUCCESS;
    payload: number;
}

interface SetUsersAction {
    type: UsersActionTypes.SET_USERS;
    payload: Array<any>;
}

interface SetPageAction {
    type: UsersActionTypes.SET_PAGE;
    payload: number;
}

interface SetTotalUsersCountAction {
    type: UsersActionTypes.SET_TOTAL_USERS_COUNT;
    payload: number;
}

interface ToggleIsFetchingAction {
    type: UsersActionTypes.TOGGLE_IS_FETCHING;
    payload: boolean;
}

interface ToggleIsFollowingProgressAction {
    type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS;
    payload: {
        isFetching: boolean;
        userId: number
    };
}

export type UsersAction =
FollowSuccessAction |
UnfollowSuccessAction |
SetUsersAction |
SetPageAction |
SetTotalUsersCountAction |
ToggleIsFetchingAction |
ToggleIsFollowingProgressAction;
