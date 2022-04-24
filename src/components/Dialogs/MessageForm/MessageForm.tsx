import React from 'react';
import { useFormik } from 'formik';

import { useActionsAndThunks } from '../../../hooks/useActionsAndThunks';
import { dialogsSlice } from '../../../toolkitRedux/reducers/dialogs/DialogsSlice';

import { FormValues } from './types';

import s from '../Dialogs.module.css';

function MessageForm(): JSX.Element {
  const buttonImageUrl = 'https://icon-library.com/images/chat-send-icon/chat-send-icon-1.jpg';

  const dispatch = useActionsAndThunks();
  const { addMessage } = dialogsSlice.actions;

  const initialValues: FormValues = {
    message: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values: FormValues) => {
      dispatch(addMessage(values.message));
      formik.handleReset();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.enterArea}>
          <textarea
            placeholder="Enter your message"
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <button type="submit">
            <img src={buttonImageUrl} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
