import React from 'react';

import { picturesUrls } from '../../../../constants/picturesUrls';

import { PostProps } from './types';

import s from './Post.module.css';

function Post({ postContent, likeCount }: PostProps): JSX.Element {
  return (
    <div className={s.item}>
      <img src={picturesUrls.DEFAULT_AVATAR_ICON} alt="" />
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
