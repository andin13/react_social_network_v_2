import { ThunkAction } from 'redux-thunk';

import { profileAPI } from '../../api/api';
import { RootState } from '../rootReducer';

import { savePhotoSuccessAction, setStatusAction, setUserProfileAction } from './actionCreators';
import { ProfileAction } from './types';

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ProfileAction>;

export const getProfileThunk = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfileAction(data));
};
export const getStatusThunk = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatusAction(data));
};
export const updateStatusThunk = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response?.data.resultCode === 0) {
    dispatch(setStatusAction(status));
  }
};
export const savePhotoThunk = (file: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccessAction(response.data.data.photos));
  }
};
