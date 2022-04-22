import { Dispatch } from 'redux';
import { initializedSuccessAction } from './actionCreators';
import { AppAction } from './types';
import { authMeThunk } from '../auth/thunks';

export const initializeAppThunk = () => async (dispatch: Dispatch<AppAction | any>) => {
  await dispatch(authMeThunk());
  dispatch(initializedSuccessAction());
};
