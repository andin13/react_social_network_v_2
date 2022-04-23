import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useActionsAndThunks } from '../../hooks/useActionsAndThunks';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';

type useParamsType = {
  userIdUrl: string;
}

function Profile(): JSX.Element {
  const profile = useTypedSelector((state) => state.profile.profile);
  const userId = useTypedSelector((state) => state.auth.user?.id);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const status = useTypedSelector((state) => state.profile.status);
  const { userIdUrl } = useParams<useParamsType>();
  let currentUsedId = 0;
  if (userIdUrl) {
    currentUsedId = +userIdUrl;
  }
  if (userId) {
    currentUsedId = userId;
  }

  const {
    getProfileThunk, getStatusThunk, savePhotoThunk,
  } = useActionsAndThunks();

  const setProfile = () => {
    if (currentUsedId) {
      getProfileThunk(currentUsedId);
      getStatusThunk(currentUsedId);
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
          savePhoto={savePhotoThunk}
          status={status}
        />
        <MyPosts />
      </div>
    );
  } return <div />;
}

export default Profile;
