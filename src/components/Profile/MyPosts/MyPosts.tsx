import React from 'react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { profileSlice } from '../../../toolkitRedux/reducers/profile/ProfileSlice';

import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

import s from './MyPosts.module.css';

function MyPosts(): JSX.Element {
  const posts = useTypedSelector((state) => state.ProfileReducer.posts);
  const { addPost, deletePosts } = profileSlice.actions;

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
      <PostForm addPost={addPost} />
      <button
        onClick={deletePosts}
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
