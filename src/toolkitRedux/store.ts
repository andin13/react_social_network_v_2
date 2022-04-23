import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './reducers/auth/AuthSlice';

const rootReducer = combineReducers({
  AuthReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
