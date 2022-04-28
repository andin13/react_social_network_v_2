/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Field,
  Formik,
  FormikErrors,
} from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import { useDispatch } from 'react-redux';

import { loginThunk } from '../../../redux/slices/auth/thunks';

import CustomFieldCreator from './CustomFieldCreator/CustomFieldCreator';

import s from './LoginForm.module.css';

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const validator = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

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
            <Field
              className={s.field}
              id="rememberMe"
              name="rememberMe"
              placeholder="Enter password"
              type="checkbox"
            />
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
