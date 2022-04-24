import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { usersAPI } from '../../../api/api';
import { AppDispatch } from '../../store';

import { usersSlice } from './UsersSlice';

export const updateUsersThunk = (
  currentPage: number,
  pageSize: number,
) => async (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(usersSlice.actions.toggleIsFetching(false));
  dispatch(usersSlice.actions.setUsers(data.items));
};

export const requestUsersThunk = (
  currentPage: number,
  pageSize: number,
) => async (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(usersSlice.actions.toggleIsFetching(false));
  dispatch(usersSlice.actions.setUsers(data.items));
  dispatch(usersSlice.actions.setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: AppDispatch,
  userId: number,
  apiMethod: (id: number) => Promise<any>,
  actionCreator: ActionCreatorWithPayload<number, string>,
) => {
  dispatch(usersSlice.actions.toggleIsFollowingProgress({
    isFetching: true,
    userId,
  }));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(usersSlice.actions.toggleIsFollowingProgress({
    isFetching: false,
    userId,
  }));
};

export const followThunk = (userId: number) => async (dispatch: AppDispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    usersSlice.actions.followSuccess,
  );
};

export const unfollowThunk = (userId: number) => async (dispatch: AppDispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    usersSlice.actions.unfollowSuccess,
  );
};
