import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import s from '../MyPosts.module.css';

interface PostFormProps {
  addPost: ActionCreatorWithPayload<string, string>;
}

interface FormValues {
  post: string;
}

function PostForm({ addPost }: PostFormProps): JSX.Element {
  const dispatch = useDispatch();
  const initialValues: FormValues = {
    post: '',
  };
  const onSubmit = (values: FormValues) => {
    dispatch(addPost(values.post));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.postCreationBlock}>
        <textarea
          placeholder="Enter your post"
          id="post"
          name="post"
          onChange={formik.handleChange}
          value={formik.values.post}
          className={s.postCreation}
        />
        <div>
          <button type="submit">Add post</button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
