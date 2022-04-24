import React from 'react';
import { NavLink } from 'react-router-dom';

import { componentsRoots } from '../../../constants/componentsRoots';
import { picturesUrls } from '../../../constants/picturesUrls';

import { DialogItemProps } from './types';

import s from './DialogItem.module.css';

function DialogItem({ name }: DialogItemProps): JSX.Element {
  const defaultAvatarIconUrl = picturesUrls.DEFAULT_AVATAR_ICON;

  return (
    <div className={s.item}>
      <img src={defaultAvatarIconUrl} alt="" />
      <NavLink to={`/${componentsRoots.DIALOGS}/`}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
