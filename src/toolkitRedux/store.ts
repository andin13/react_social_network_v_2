import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import AppReducer from './reducers/app/AppSlice';
import AuthReducer from './reducers/auth/AuthSlice';
import DialogsReducer from './reducers/dialogs/DialogsSlice';
import ProfileReducer from './reducers/profile/ProfileSlice';
import UsersReducer from './reducers/users/UsersSlice';

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
  DialogsReducer,
  ProfileReducer,
  UsersReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
