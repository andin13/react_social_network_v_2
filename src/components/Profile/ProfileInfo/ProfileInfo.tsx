import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { picturesUrls } from '../../../constants/picturesUrls';
import { savePhotoThunk } from '../../../toolkitRedux/slices/profile/thunks';
import Preloader from '../../common/Preloader/Preloader';

import ProfileStatus from './ProfileStatus/ProfileStatus';
import { ProfileInfoProps } from './types';

import s from './ProfileInfo.module.css';

function ProfileInfo({
  profile, status, isOwner,
}: ProfileInfoProps): JSX.Element {
  const dispatch = useDispatch();
  const userAvatar = profile.photos.large ? profile.photos.large : picturesUrls.DEFAULT_AVATAR_ICON;

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(savePhotoThunk(e.target.files[0]));
    }
  };

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src={picturesUrls.DEFAULT_IMAGE}
          style={{ width: '100%' }}
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={userAvatar}
          className={s.userImage}
          alt=""
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatus status={status} isOwner={isOwner} />
      </div>
    </div>
  );
}

export default ProfileInfo;
