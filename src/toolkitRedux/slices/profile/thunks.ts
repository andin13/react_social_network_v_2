import { profileAPI } from '../../../api/profileAPI/profileAPI';
import { AppDispatch } from '../../store';

import { profileActions } from './slice';

export const getProfileThunk = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(profileActions.setUserProfile(data));
};
export const getStatusThunk = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(profileActions.setStatus(data));
};
export const updateStatusThunk = (status: string) => async (dispatch: AppDispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response?.data.resultCode === 0) {
    dispatch(profileActions.setStatus(status));
  }
};
export const savePhotoThunk = (file: File) => async (dispatch: AppDispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(profileActions.savePhotoSuccess(response.data.data.photos));
  }
};
