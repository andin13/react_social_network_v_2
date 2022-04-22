import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
import { DialogItemProps } from './types';

function DialogItem({ name }: DialogItemProps): JSX.Element {
  const path = '/dialogs/';
  const defaultAvatarIconUrl = 'https://cdn4.iconfinder.com/data/icons'
  + '/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png';

  return (
    <div className={s.item}>
      <img src={defaultAvatarIconUrl} alt="" />
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
