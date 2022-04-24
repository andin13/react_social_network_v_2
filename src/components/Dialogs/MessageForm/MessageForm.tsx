import React from 'react';
import { useFormik } from 'formik';

import { picturesUrls } from '../../../constants/picturesUrls';
import { useActionsAndThunks } from '../../../hooks/useActionsAndThunks';
import { dialogsSlice } from '../../../toolkitRedux/slices/dialogs/slice';

import { FormValues } from './types';

import s from '../Dialogs.module.css';

function MessageForm(): JSX.Element {
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
            <img src={picturesUrls.BUTTON_IMAGE} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
