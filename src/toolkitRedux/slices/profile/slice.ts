import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPhotos } from '../../../commonTypes/IPhotos';
import { IProfile } from '../../../commonTypes/IProfile';

import { ProfileState } from './types';

const initialState: ProfileState = {
  posts: [],
  profile: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos: {
      small: null,
      large: null,
    },
  },
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
    setUserProfile(state, action: PayloadAction<IProfile>) {
      state.profile = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    savePhotoSuccess(state, action: PayloadAction<IPhotos>) {
      state.profile.photos = action.payload.photos;
    },
  },
});

const { actions, reducer } = profileSlice;
export const profileActions = actions;
export default reducer;
