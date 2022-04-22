import { Dispatch } from 'redux';

import { authMeThunk } from '../auth/thunks';

import { initializedSuccessAction } from './actionCreators';
import { AppAction } from './types';

export const initializeAppThunk = () => async (dispatch: Dispatch<AppAction | any>) => {
  await dispatch(authMeThunk());
  dispatch(initializedSuccessAction());
};
