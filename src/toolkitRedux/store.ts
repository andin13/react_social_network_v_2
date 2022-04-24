import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import AppReducer from './slices/app/slice';
import AuthReducer from './slices/auth/slice';
import DialogsReducer from './slices/dialogs/slice';
import ProfileReducer from './slices/profile/slice';
import UsersReducer from './slices/users/slice';

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
  DialogsReducer,
  ProfileReducer,
  UsersReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
