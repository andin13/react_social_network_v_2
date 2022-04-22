import { Dispatch } from 'redux';
import {
  toggleIsFetchingAction,
  setUsersAction,
  setTotalUsersCountAction,
  toggleIsFollowingProgressAction,
  followSuccessAction,
  unfollowSuccessAction,
} from './actionCreators';
import { UsersAction } from './types';
import { usersAPI } from '../../api/api';

export const updateUsersThunk = (
  currentPage,
  pageSize,
) => async (dispatch: Dispatch<UsersAction | any>) => {
  dispatch(toggleIsFetchingAction(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetchingAction(false));
  dispatch(setUsersAction(data.items));
};

export const requestUsersThunk = (
  currentPage,
  pageSize,
) => async (dispatch: Dispatch<UsersAction | any>) => {
  dispatch(toggleIsFetchingAction(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetchingAction(false));
  dispatch(setUsersAction(data.items));
  dispatch(setTotalUsersCountAction(data.totalCount));
};

export const followUnfollowFlowThunk = async (
  dispatch: Dispatch<UsersAction | any>,
  userId: number,
  apiMethod,
  actionCreator,
) => {
  dispatch(toggleIsFollowingProgressAction(
    {
      isFetching: true,
      userId,
    },
  ));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgressAction(
    {
      isFetching: false,
      userId,
    },
  ));
};

export const followThunk = (userId) => async (dispatch: Dispatch<UsersAction | any>) => {
  followUnfollowFlowThunk(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSuccessAction,
  );
};

export const unfollowThunk = (userId) => async (dispatch: Dispatch<UsersAction | any>) => {
  followUnfollowFlowThunk(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSuccessAction,
  );
};
