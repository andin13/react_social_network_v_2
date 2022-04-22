import * as AppActionCreators from './app/actionCreators';
import * as AuthActionCreators from './auth/actionCreators';
import * as DialogsActionCreators from './dialogs/actionCreators';
import * as ProfileActionCreators from './profile/actionCreators';
import * as UsersActionCreators from './users/actionCreators';

import * as AppThunks from './app/thunks';
import * as AuthThunks from './auth/thunks';
import * as ProfileThunks from './profile/thunks';
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
