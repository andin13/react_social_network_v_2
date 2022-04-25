import { FormikErrors } from 'formik';

import { FormValues } from './types';

export const validator = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
};
