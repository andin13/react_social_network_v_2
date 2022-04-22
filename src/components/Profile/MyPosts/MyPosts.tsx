import React from 'react';

import { useActionsAndThunks } from '../../../hooks/useActionsAndThunks';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

import s from './MyPosts.module.css';

function MyPosts(): JSX.Element {
  const posts = useTypedSelector((state) => state.profile.posts);
  const { addPostAction, deletePostsAction } = useActionsAndThunks();

  const postElements = posts.map((p) => (
    <Post
      postContent={p.postContent}
      key={p.id}
      likeCount={p.likeCount}
    />
  ));

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <PostForm addPost={addPostAction} />
      <button
        onClick={deletePostsAction}
        type="button"
      >
        Delete all posts
      </button>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
