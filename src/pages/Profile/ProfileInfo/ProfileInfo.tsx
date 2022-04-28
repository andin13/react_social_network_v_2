import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { IProfile } from '../../../commonTypes/IProfile';
import Preloader from '../../../components/Preloader/Preloader';
import { picturesUrls } from '../../../constants/picturesUrls';
import { savePhotoThunk } from '../../../redux/slices/profile/thunks';

import ProfileStatus from './ProfileStatus/ProfileStatus';

import s from './ProfileInfo.module.css';

interface ProfileInfoProps {
  profile: IProfile;
  status: string;
  isOwner: boolean;
}

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
