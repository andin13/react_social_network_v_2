/* eslint-disable default-param-last */
import { ProfileAction, ProfileActionTypes, ProfileState } from './types';

const initialState: ProfileState = {
  posts: [],
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            postContent: action.payload,
            likeCount: 0,
          },
        ],
      };
    case ProfileActionTypes.DELETE_POSTS:
      return {
        ...state,
        posts: [],
      };
    case ProfileActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload),
      };
    case ProfileActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ProfileActionTypes.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case ProfileActionTypes.SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.payload,
        },
      };
    default:
      return state;
  }
};
