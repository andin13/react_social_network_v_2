import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  getProfileThunk, getStatusThunk,
  savePhotoThunk,
} from '../../toolkitRedux/reducers/profile/thunks';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';

type useParamsType = {
  userIdUrl: string;
}

function Profile(): JSX.Element {
  const profile = useTypedSelector((state) => state.ProfileReducer.profile);
  const userId = useTypedSelector((state) => state.AuthReducer.user?.id);
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);
  const status = useTypedSelector((state) => state.ProfileReducer.status);
  const dispatch = useDispatch();
  const { userIdUrl } = useParams<useParamsType>();
  let currentUsedId = 0;
  if (userIdUrl) {
    currentUsedId = +userIdUrl;
  }
  if (userId) {
    currentUsedId = userId;
  }

  const setProfile = () => {
    if (currentUsedId) {
      dispatch(getProfileThunk(currentUsedId));
      dispatch(getStatusThunk(currentUsedId));
    }
  };

  useEffect(() => setProfile(), [currentUsedId]);
  if (!isAuth && !userIdUrl) return <Navigate to="/login" />;
  if (profile) {
    return (
      <div className={s.profileDiv}>
        <ProfileInfo
          profile={profile}
          isOwner={!userIdUrl}
          savePhoto={dispatch(savePhotoThunk)}
          status={status}
        />
        <MyPosts />
      </div>
    );
  } return <div />;
}

export default Profile;
