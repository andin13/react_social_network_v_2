import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { FollowResponseType, UnfollowResponseType } from '../../../api/usersAPI/types';
import { usersAPI } from '../../../api/usersAPI/usersAPI';
import { ResultCodes } from '../../../constants/resultCodes';
import { AppDispatch } from '../../store';

import { usersActions } from './slice';

export const updateUsersThunk = (
  currentPage: number,
  pageSize: number,
) => async (dispatch: AppDispatch) => {
  dispatch(usersActions.toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(usersActions.toggleIsFetching(false));
  dispatch(usersActions.setUsers(data.items));
};

export const requestUsersThunk = (
  currentPage: number,
  pageSize: number,
) => async (dispatch: AppDispatch) => {
  dispatch(usersActions.toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(usersActions.toggleIsFetching(false));
  dispatch(usersActions.setUsers(data.items));
  dispatch(usersActions.setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: AppDispatch,
  userId: number,
  apiMethod: (id: number) => Promise<FollowResponseType | UnfollowResponseType>,
  actionCreator: ActionCreatorWithPayload<number, string>,
) => {
  dispatch(usersActions.toggleIsFollowingProgress({
    isFetching: true,
    userId,
  }));
  const data = await apiMethod(userId);
  if (data.resultCode === ResultCodes.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(usersActions.toggleIsFollowingProgress({
    isFetching: false,
    userId,
  }));
};

export const followThunk = (userId: number) => async (dispatch: AppDispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    usersActions.followSuccess,
  );
};

export const unfollowThunk = (userId: number) => async (dispatch: AppDispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    usersActions.unfollowSuccess,
  );
};
