/* eslint-disable default-param-last */
import { updateObjectInArray } from '../../utils/object-helpers';

import { UsersAction, UsersActionTypes, UsersState } from './types';

const initialState: UsersState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FOLLOW_SUCCESS:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', { followed: true }),
      };
    case UsersActionTypes.UNFOLLOW_SUCCESS:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', { followed: false }),
      };
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UsersActionTypes.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case UsersActionTypes.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    case UsersActionTypes.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter((id) => id !== action.payload.userId),
      };
    default:
      return state;
  }
};
