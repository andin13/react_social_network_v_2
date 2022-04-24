import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileState } from './types';

const initialState: ProfileState = {
  posts: [],
  profile: null,
  status: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<string>) {
      state.posts.push({
        id: state.posts.length,
        postContent: action.payload,
        likeCount: 0,
      });
    },
    deletePosts(state) {
      state.posts = [];
    },
    deletePost(state, action: PayloadAction<number>) {
      state.posts.filter((p) => p.id !== action.payload);
    },
    setUserProfile(state, action: PayloadAction<any>) {
      state.profile = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    savePhotoSuccess(state, action: PayloadAction<any>) {
      state.profile.photos = action.payload;
    },
  },
});

const { actions, reducer } = profileSlice;
export const {
  addPost, deletePosts, deletePost, setUserProfile, setStatus, savePhotoSuccess,
} = actions;
export default reducer;
