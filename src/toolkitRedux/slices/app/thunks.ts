import { AppDispatch } from '../../store';
import { authMeThunk } from '../auth/thunks';

import { initializedSuccess } from './slice';

export const initializeAppThunk = () => async (dispatch: AppDispatch) => {
  await dispatch(authMeThunk());
  dispatch(initializedSuccess());
};
