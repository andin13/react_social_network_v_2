import { Dispatch } from 'redux';

import { UsersAction } from '../../../redux/users/types';

export interface UserProps {
    user: any;
    followingInProgress: Array<any>;
    toggleFollowingProgress: (payload: {
        isFetching: boolean;
        userId: number;
    }) => UsersAction;
    follow: (userId: any) => (dispatch: Dispatch<any>) => Promise<void>;
    unfollow: (userId: any) => (dispatch: Dispatch<any>) => Promise<void>
}
