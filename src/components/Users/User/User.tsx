import React from 'react';
import { NavLink } from 'react-router-dom';

import { useActionsAndThunks } from '../../../hooks/useActionsAndThunks';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { UserProps } from './types';

import s from '../Users.module.css';

function User({ user, followingInProgress }: UserProps): JSX.Element {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const defaultUserImageUrl = 'https://cdn4.iconfinder.com/data/icons'
  + '/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png';

  const {
    followThunk, unfollowThunk, toggleIsFollowingProgressAction,
  } = useActionsAndThunks();

  const followButton = isAuth
    ? (
      <button
        disabled={followingInProgress.some((id) => id === user.id)}
        onClick={() => {
          toggleIsFollowingProgressAction({ isFetching: true, userId: user.id });
          if (user.followed === true) unfollowThunk(user.id);
          else followThunk(user.id);
        }}
        type="button"
      >
        {user.followed === true ? 'unfollow' : 'follow'}
      </button>
    )
    : null;

  return (
    <div>
      <div className={s.container}>
        <div className={s.avatar}>
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img
                src={user.photos.small ? user.photos.small : defaultUserImageUrl}
                alt="img"
                className={s.userAvatar}
              />
            </NavLink>
          </div>
          <div>
            {followButton}

          </div>
        </div>
        <div className={s.userInfo}>
          <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
