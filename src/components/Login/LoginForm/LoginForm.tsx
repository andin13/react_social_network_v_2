/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik,
} from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import { useDispatch } from 'react-redux';

import { loginThunk } from '../../../toolkitRedux/slices/auth/thunks';

import CustomFieldCreator from './CustomFieldCreator/CustomFieldCreator';
import { FormValues } from './types';
import { validator } from './validator';

import s from './LoginForm.module.css';

function LoginForm(): JSX.Element {
  const dispatch = useDispatch();
  const initialValues: FormValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  return (
    <div className={s.form}>
      <h1 className={s.title}>Login</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => validator(values)}
        onSubmit={(values, actions) => {
          dispatch(loginThunk(values.email, values.password, values.rememberMe));
          actions.setSubmitting(false);
        }}
      >
        <Form className={s.formContent}>
          <CustomFieldCreator name="email" placeholder="Enter email" type="text" />
          <CustomFieldCreator name="password" placeholder="Enter password" type="password" />
          <div className={s.rememberMe}>
            <label htmlFor="rememberMe">Remember me</label>
            <CustomFieldCreator name="rememberMe" placeholder="Enter password" type="checkbox" />
          </div>
          <div className={s.buttons}>
            <SubmitButton>Submit</SubmitButton>
          </div>

        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
