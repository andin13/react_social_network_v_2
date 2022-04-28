/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, FormikErrors,
} from 'formik';
import { Form } from 'formik-antd';
import { useDispatch } from 'react-redux';

import { picturesUrls } from '../../../constants/picturesUrls';
import { dialogsActions } from '../../../redux/slices/dialogs/slice';

import CustomFieldCreator from './CustomFieldCreator/CustomFieldCreator';

import s from './MessageForm.module.css';

interface FormValues {
  message: string;
}

const validator = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
};

function MessageForm(): JSX.Element {
  const dispatch = useDispatch();
  const { addMessage } = dialogsActions;
  const initialValues: FormValues = {
    message: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validator(values)}
      onSubmit={(values, actions) => {
        dispatch(addMessage(values.message));
        actions.setSubmitting(false);
      }}
    >

      <Form className={s.enterArea}>
        <CustomFieldCreator name="message" placeholder="Enter your message" type="message" />
        <button type="submit">
          <img src={picturesUrls.BUTTON_IMAGE} alt="" />
        </button>
      </Form>

    </Formik>
  );
}

export default MessageForm;
