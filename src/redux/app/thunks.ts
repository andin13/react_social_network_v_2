import { ThunkAction } from 'redux-thunk';

import { authMeThunk } from '../auth/thunks';
import { RootState } from '../rootReducer';

import { initializedSuccessAction } from './actionCreators';
import { AppAction } from './types';

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, AppAction>;

export const initializeAppThunk = (): ThunkType => async (dispatch) => {
  await dispatch(authMeThunk());
  dispatch(initializedSuccessAction());
};
