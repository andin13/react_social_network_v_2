import React from 'react';
import s from './Post.module.css';
import { PostProps } from './types';

function Post({ postContent, likeCount }: PostProps): JSX.Element {
  const imageUrl = 'https://cdn4.iconfinder.com/'
  + 'data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png';

  return (
    <div className={s.item}>
      <img src={imageUrl} alt="" />
      <div>{postContent}</div>
      <div>
        <span>
          {likeCount}
          {' '}
          likes
        </span>
      </div>
    </div>
  );
}

export default Post;
