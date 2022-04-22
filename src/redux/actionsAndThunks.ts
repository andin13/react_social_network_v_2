import * as AppActionCreators from './app/actionCreators';
import * as AppThunks from './app/thunks';
import * as AuthActionCreators from './auth/actionCreators';
import * as AuthThunks from './auth/thunks';
import * as DialogsActionCreators from './dialogs/actionCreators';
import * as ProfileActionCreators from './profile/actionCreators';
import * as ProfileThunks from './profile/thunks';
import * as UsersActionCreators from './users/actionCreators';
import * as UsersThunks from './users/thunks';

export default {
  ...AppActionCreators,
  ...AuthActionCreators,
  ...DialogsActionCreators,
  ...ProfileActionCreators,
  ...UsersActionCreators,

  ...AppThunks,
  ...AuthThunks,
  ...ProfileThunks,
  ...UsersThunks,
};
