import { combineReducers } from 'redux';
import { appReducer } from './app/reducer';
import { authReducer } from './auth/reducer';
import { dialogsReducer } from './dialogs/reducer';
import { profileReducer } from './profile/reducer';
import { usersReducer } from './users/reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  dialogs: dialogsReducer,
  profile: profileReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
