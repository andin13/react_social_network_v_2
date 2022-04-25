import { AppDispatch } from '../../store';
import { authMeThunk } from '../auth/thunks';

import { appActions } from './slice';

export const initializeAppThunk = () => async (dispatch: AppDispatch) => {
  await dispatch(authMeThunk());
  dispatch(appActions.initializedSuccess());
};
