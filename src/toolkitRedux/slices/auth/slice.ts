import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../../commonTypes/IUser';

import { AuthState } from './types';

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
  },
});

const { actions, reducer } = authSlice;
export const { setUserData, logout } = actions;
export default reducer;
