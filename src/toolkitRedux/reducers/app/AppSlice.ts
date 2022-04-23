import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './types';

const initialState: AppState = {
  initialized: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializedSuccess(state) {
      state.initialized = true;
    },
  },
});

export default appSlice.reducer;
