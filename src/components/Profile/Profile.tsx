import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActionsAndThunks } from '../../hooks/useActionsAndThunks';

function Profile(): JSX.Element {
  const profile = useTypedSelector((state) => state.profile.profile);
  const userId = useTypedSelector((state) => state.auth.user?.id);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const status = useTypedSelector((state) => state.profile.status);
  const { userIdUrl } = useParams();
  const currentUsedId: string | number | undefined | null = userIdUrl || userId;

  const {
    getProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk,
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
          updateStatus={updateStatusThunk}
        />
        <MyPosts />
      </div>
    );
  } return <div />;
}

export default Profile;
