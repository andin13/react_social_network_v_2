import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { usersAPI } from '../../api/api';
import { RootState } from '../rootReducer';

import {
  followSuccessAction,
  setTotalUsersCountAction,
  setUsersAction,
  toggleIsFetchingAction,
  toggleIsFollowingProgressAction,
  unfollowSuccessAction,
} from './actionCreators';
import { UsersAction } from './types';

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UsersAction>;

export const updateUsersThunk = (
  currentPage: number,
  pageSize: number,
): ThunkType => async (dispatch) => {
  dispatch(toggleIsFetchingAction(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetchingAction(false));
  dispatch(setUsersAction(data.items));
};

export const requestUsersThunk = (
  currentPage: number,
  pageSize: number,
): ThunkType => async (dispatch) => {
  dispatch(toggleIsFetchingAction(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetchingAction(false));
  dispatch(setUsersAction(data.items));
  dispatch(setTotalUsersCountAction(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: Dispatch<UsersAction>,
  userId: number,
  apiMethod: (id: number) => Promise<any>,
  actionCreator: (userId: number) => UsersAction,
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

export const followThunk = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSuccessAction,
  );
};

export const unfollowThunk = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSuccessAction,
  );
};
