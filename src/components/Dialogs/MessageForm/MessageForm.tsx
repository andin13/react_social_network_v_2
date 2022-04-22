import React from 'react';
import { useFormik } from 'formik';
import s from '../Dialogs.module.css';
import { FormValues, MessageFormProps } from './types';

function MessageForm({ addMessage }: MessageFormProps): JSX.Element {
  const buttonImageUrl = 'https://icon-library.com/images/chat-send-icon/chat-send-icon-1.jpg';

  const initialValues: FormValues = {
    message: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values: FormValues) => {
      addMessage(values.message);
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
