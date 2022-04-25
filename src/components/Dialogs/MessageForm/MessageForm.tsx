/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik,
} from 'formik';
import { Form } from 'formik-antd';
import { useDispatch } from 'react-redux';

import { picturesUrls } from '../../../constants/picturesUrls';
import { dialogsActions } from '../../../toolkitRedux/slices/dialogs/slice';

import CustomFieldCreator from './CustomFieldCreator/CustomFieldCreator';
import { FormValues } from './types';
import { validator } from './validator';

import s from './MessageForm.module.css';

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
