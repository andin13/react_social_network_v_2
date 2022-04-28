import React from 'react';
import { NavLink } from 'react-router-dom';

import { componentsRoutes } from '../../../constants/componentsRoutes';
import { picturesUrls } from '../../../constants/picturesUrls';

import s from './DialogItem.module.css';

interface DialogItemProps {
  name: string;
}

function DialogItem({ name }: DialogItemProps): JSX.Element {
  const defaultAvatarIconUrl = picturesUrls.DEFAULT_AVATAR_ICON;

  return (
    <div className={s.item}>
      <img src={defaultAvatarIconUrl} alt="" />
      <NavLink to={`/${componentsRoutes.DIALOGS}/`}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
