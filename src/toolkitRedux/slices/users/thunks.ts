import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { usersAPI } from '../../../api/usersAPI/usersAPI';
import { AppDispatch } from '../../store';

import {
  followSuccess, setTotalUsersCount, setUsers,
  toggleIsFetching, toggleIsFollowingProgress, unfollowSuccess,
} from './slice';

export const updateUsersThunk = (
  currentPage: number,
  pageSize: number,
) => async (dispatch: AppDispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
};

export const requestUsersThunk = (
  currentPage: number,
  pageSize: number,
) => async (dispatch: AppDispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: AppDispatch,
  userId: number,
  apiMethod: (id: number) => Promise<any>,
  actionCreator: ActionCreatorWithPayload<number, string>,
) => {
  dispatch(toggleIsFollowingProgress({
    isFetching: true,
    userId,
  }));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress({
    isFetching: false,
    userId,
  }));
};

export const followThunk = (userId: number) => async (dispatch: AppDispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSuccess,
  );
};

export const unfollowThunk = (userId: number) => async (dispatch: AppDispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSuccess,
  );
};
