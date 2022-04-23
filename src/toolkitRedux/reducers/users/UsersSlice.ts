import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateObjectInArray } from '../../../utils/object-helpers';

import { ToggleIsFollowingProgressPayload, UsersState } from './types';

const initialState: UsersState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    followSuccess(state, action: PayloadAction<number>) {
      state.users = updateObjectInArray(state.users, action.payload, 'id', { followed: true });
    },
    unfollowSuccess(state, action: PayloadAction<number>) {
      state.users = updateObjectInArray(state.users, action.payload, 'id', { followed: false });
    },
    setUsers(state, action: PayloadAction<Array<any>>) {
      state.users = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTotalUsersCount(state, action: PayloadAction<number>) {
      state.totalUsersCount = action.payload;
    },
    toggleIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    toggleIsFollowingProgress(state, action: PayloadAction<ToggleIsFollowingProgressPayload>) {
      if (action.payload.isFetching) {
        state.followingInProgress.push(action.payload.userId);
      } else {
        state.followingInProgress = state.followingInProgress.filter((
          id,
        ) => id !== action.payload.userId);
      }
    },
  },
});

export default usersSlice.reducer;
