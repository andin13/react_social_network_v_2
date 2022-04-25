import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { componentsRoutes } from '../../../constants/componentsRoutes';
import { picturesUrls } from '../../../constants/picturesUrls';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { usersSlice } from '../../../toolkitRedux/slices/users/slice';
import { followThunk, unfollowThunk } from '../../../toolkitRedux/slices/users/thunks';

import { UserProps } from './types';

import s from '../Users.module.css';

function User({ user, followingInProgress }: UserProps): JSX.Element {
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();

  const { toggleIsFollowingProgress } = usersSlice.actions;

  const followButton = isAuth
    ? (
      <button
        disabled={followingInProgress.some((id) => id === user.id)}
        onClick={() => {
          toggleIsFollowingProgress({ isFetching: true, userId: user.id });
          if (user.followed === true) dispatch(unfollowThunk(user.id));
          else dispatch(followThunk(user.id));
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
            <NavLink to={`/${componentsRoutes.PROFILE}/${user.id}`}>
              <img
                src={user.photos.small ? user.photos.small : picturesUrls.DEFAULT_AVATAR_ICON}
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
