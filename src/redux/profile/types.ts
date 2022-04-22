import { IPost } from '../commonTypes/IPost';

export interface ProfileState {
    posts: Array<IPost>;
    profile: any;
    status: string;
}

export enum ProfileActionTypes {
    ADD_POST = 'ADD_POST',
    DELETE_POSTS = 'DELETE_POSTS',
    DELETE_POST = 'DELETE_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS',
    SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS',
}

interface AddPostAction {
    type: ProfileActionTypes.ADD_POST;
    payload: string;
}

interface DeletePostsAction {
    type: ProfileActionTypes.DELETE_POSTS;
}

interface DeletePostAction {
    type: ProfileActionTypes.DELETE_POST;
    payload: number;
}

interface SetUserProfileAction {
    type: ProfileActionTypes.SET_USER_PROFILE;
    payload: any;
}

interface SetStatusAction {
    type: ProfileActionTypes.SET_STATUS;
    payload: string;
}

interface SavePhotoSuccessAction {
    type: ProfileActionTypes.SAVE_PHOTO_SUCCESS;
    payload: any;
}

export type ProfileAction =
AddPostAction |
DeletePostsAction |
DeletePostAction |
SetUserProfileAction |
SetStatusAction |
SavePhotoSuccessAction;
