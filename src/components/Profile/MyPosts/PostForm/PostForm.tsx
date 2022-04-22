import React from 'react';
import { useFormik } from 'formik';

import { FormValues, PostFormProps } from './types';

import s from '../MyPosts.module.css';

function PostForm({ addPost }: PostFormProps): JSX.Element {
  const initialValues: FormValues = {
    post: '',
  };
  const onSubmit = (values: FormValues) => {
    addPost(values.post);
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
