import React, {
  ChangeEvent, useEffect, useState,
} from 'react';

import { ProfileStatusProps } from './types';

import s from '../ProfileInfo.module.css';

function ProfileStatus({ status, isOwner, updateStatus }: ProfileStatusProps): JSX.Element {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [localStatus, setStatus] = useState<string>(status);
  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateEditMode = () => {
    if (isOwner) setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(localStatus);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={s.status}>
      {!editMode && (
      <div>
        <span onDoubleClick={activateEditMode}>{status || 'empty'}</span>
      </div>
      )}
      {editMode && (
      <div>
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={localStatus}
        />
      </div>
      )}
    </div>
  );
}

export default ProfileStatus;
