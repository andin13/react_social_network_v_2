import { UsersAction, UsersActionTypes } from './types';

export const followSuccessAction = (
  payload: number,
):UsersAction => ({ type: UsersActionTypes.FOLLOW_SUCCESS, payload });
export const unfollowSuccessAction = (
  payload: number,
):UsersAction => ({ type: UsersActionTypes.UNFOLLOW_SUCCESS, payload });
export const setUsersAction = (
  payload: Array<any>,
):UsersAction => ({ type: UsersActionTypes.SET_USERS, payload });
export const setPageAction = (
  payload: number,
):UsersAction => ({ type: UsersActionTypes.SET_PAGE, payload });
export const setTotalUsersCountAction = (
  payload: number,
):UsersAction => ({ type: UsersActionTypes.SET_TOTAL_USERS_COUNT, payload });
export const toggleIsFetchingAction = (
  payload: boolean,
):UsersAction => ({ type: UsersActionTypes.TOGGLE_IS_FETCHING, payload });
export const toggleIsFollowingProgressAction = (
  payload: {
    isFetching: boolean;
        userId: number
  },
):UsersAction => ({ type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS, payload });
