import { Dispatch } from 'redux';

import { profileAPI } from '../../api/api';

import { savePhotoSuccessAction, setStatusAction, setUserProfileAction } from './actionCreators';
import { ProfileAction } from './types';

export const getProfileThunk = (userId) => async (dispatch: Dispatch<ProfileAction | any>) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfileAction(data));
};
export const getStatusThunk = (userId) => async (dispatch: Dispatch<ProfileAction | any>) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatusAction(data));
};
export const updateStatusThunk = (status) => async (dispatch: Dispatch<ProfileAction | any>) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatusAction(status));
  }
};
export const savePhotoThunk = (file) => async (dispatch: Dispatch<ProfileAction | any>) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccessAction(response.data.data.photos));
  }
};
