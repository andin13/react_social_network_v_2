import React from 'react';

import { picturesUrls } from '../../../../constants/picturesUrls';

import s from './Post.module.css';

interface PostProps {
  postContent: string;
  likeCount: number
}

function Post({ postContent, likeCount }: PostProps): JSX.Element {
  return (
    <div className={s.item}>
      <img src={picturesUrls.DEFAULT_AVATAR_ICON} alt="" />
      <div>{postContent}</div>
      <div>
        <span>
          {`${likeCount} likes`}
        </span>
      </div>
    </div>
  );
}

export default Post;
