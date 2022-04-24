import { profileAPI } from '../../../api/api';
import { AppDispatch } from '../../store';

import { savePhotoSuccess, setStatus, setUserProfile } from './slice';

export const getProfileThunk = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getStatusThunk = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};
export const updateStatusThunk = (status: string) => async (dispatch: AppDispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response?.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhotoThunk = (file: File) => async (dispatch: AppDispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
