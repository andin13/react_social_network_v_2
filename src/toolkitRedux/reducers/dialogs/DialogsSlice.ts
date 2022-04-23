import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DialogsState } from './types';

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

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<string>) {
      state.messages.push({
        id: (state.messages[state.messages.length - 1].id + 1),
        message: action.payload,
        incoming: false,
      });
    },
  },
});

export default dialogsSlice.reducer;
