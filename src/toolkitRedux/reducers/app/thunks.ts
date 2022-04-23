import { AppDispatch } from '../../store';
import { authMeThunk } from '../auth/thunks';

import { appSlice } from './AppSlice';

export const initializeAppThunk = () => async (dispatch: AppDispatch) => {
  await dispatch(authMeThunk());
  dispatch(appSlice.actions.initializedSuccess());
};
