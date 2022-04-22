import React, { ChangeEvent } from 'react';

import Preloader from '../../common/Preloader/Preloader';

import ProfileStatus from './ProfileStatus/ProfileStatus';
import { ProfileInfoProps } from './types';

import s from './ProfileInfo.module.css';

function ProfileInfo({
  profile, status, updateStatus, isOwner, savePhoto,
}: ProfileInfoProps): JSX.Element {
  const defaultUserImageUrl = 'https://helpx.adobe.com/content/dam'
  + '/help/en/photoshop/using/convert-color-image-black-white/jcr_content'
  + '/main-pars/before_and_after/image-before/Landscape-Color.jpg';
  const defaultUserAvatarUrl = 'https://cdn4.iconfinder.com/data/'
  + 'icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png';
  const userAvatar = profile.photos.large ? profile.photos.large : defaultUserAvatarUrl;

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src={defaultUserImageUrl}
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
        <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
      </div>
    </div>
  );
}

export default ProfileInfo;
