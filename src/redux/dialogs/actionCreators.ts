import { DialogsAction, DialogsActionTypes } from './types';

export const addMessageAction = (
  payload: string,
):DialogsAction => ({ type: DialogsActionTypes.ADD_MESSAGE, payload });
