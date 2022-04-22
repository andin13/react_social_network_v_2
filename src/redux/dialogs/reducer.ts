/* eslint-disable default-param-last */
import { DialogsAction, DialogsActionTypes, DialogsState } from './types';

const initialState: DialogsState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hi', incoming: false },
    { id: 2, message: 'How are you?', incoming: true },
    { id: 3, message: 'Hi2', incoming: false },
    { id: 4, message: 'Hi', incoming: true },
  ],
};

export const dialogsReducer = (state = initialState, action: DialogsAction): DialogsState => {
  switch (action.type) {
    case DialogsActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: (state.messages[state.messages.length - 1].id + 1),
            message: action.payload,
            incoming: false,
          },
        ],
      };
    default:
      return state;
  }
};
