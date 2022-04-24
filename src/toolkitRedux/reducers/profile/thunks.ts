import { profileAPI } from '../../../api/api';
import { AppDispatch } from '../../store';

import { profileSlice } from './ProfileSlice';

export const getProfileThunk = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(profileSlice.actions.setUserProfile(data));
};
export const getStatusThunk = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(profileSlice.actions.setStatus(data));
};
export const updateStatusThunk = (status: string) => async (dispatch: AppDispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response?.data.resultCode === 0) {
    dispatch(profileSlice.actions.setStatus(status));
  }
};
export const savePhotoThunk = (file: File) => async (dispatch: AppDispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(profileSlice.actions.savePhotoSuccess(response.data.data.photos));
  }
};
