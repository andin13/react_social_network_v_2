import { ProfileAction, ProfileActionTypes } from './types';

export const addPostAction = (
  payload: string,
):ProfileAction => ({ type: ProfileActionTypes.ADD_POST, payload });

export const deletePostsAction = ():ProfileAction => ({ type: ProfileActionTypes.DELETE_POSTS });

export const deletePostAction = (
  payload: number,
):ProfileAction => ({ type: ProfileActionTypes.DELETE_POST, payload });

export const setUserProfileAction = (
  payload: any,
):ProfileAction => ({ type: ProfileActionTypes.SET_USER_PROFILE, payload });

export const setStatusAction = (
  payload: string,
):ProfileAction => ({ type: ProfileActionTypes.SET_STATUS, payload });

export const savePhotoSuccessAction = (
  payload: any,
):ProfileAction => ({ type: ProfileActionTypes.SAVE_PHOTO_SUCCESS, payload });
