/* eslint-disable jsx-a11y/no-autofocus */
import React, {
  ChangeEvent, useEffect, useState,
} from 'react';

import { useActionsAndThunks } from '../../../../hooks/useActionsAndThunks';

import { ProfileStatusProps } from './types';

import s from '../ProfileInfo.module.css';

function ProfileStatus({ status, isOwner }: ProfileStatusProps): JSX.Element {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [localStatus, setStatus] = useState<string>(status);

  const { updateStatusThunk } = useActionsAndThunks();

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateEditMode = () => {
    if (isOwner) setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatusThunk(localStatus);
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
