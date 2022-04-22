import { AppAction, AppActionTypes } from './types';

export const initializedSuccessAction = ():AppAction => ({
  type: AppActionTypes.INITIALIZED_SUCCESS,
});
