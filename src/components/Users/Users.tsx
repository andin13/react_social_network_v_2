import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActionsAndThunks } from '../../hooks/useActionsAndThunks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';

import User from './User/User';

function Users(): JSX.Element {
  const users = useTypedSelector((state) => state.users.users);
  const pageSize = useTypedSelector((state) => state.users.pageSize);
  const totalUsersCount = useTypedSelector((state) => state.users.totalUsersCount);
  const followingInProgress = useTypedSelector((state) => state.users.followingInProgress);
  const isFetching = useTypedSelector((state) => state.users.isFetching);
  const { currentPageUrl } = useParams();

  const {
    followThunk, unfollowThunk, toggleIsFollowingProgressAction,
    setPageAction, requestUsersThunk, updateUsersThunk,
  } = useActionsAndThunks();

  const onPageChanged = (pageNumber) => {
    updateUsersThunk(pageNumber, pageSize);
    setPageAction(+pageNumber);
  };

  useEffect(() => requestUsersThunk(currentPageUrl, pageSize), []);

  if (isFetching) return <Preloader />;
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPageUrl}
        baseUrl="/users/"
        onPageChanged={onPageChanged}
      />
      <div>
        {
                    users.map((u) => (
                      <User
                        user={u}
                        key={u.id}
                        followingInProgress={followingInProgress}
                        toggleFollowingProgress={toggleIsFollowingProgressAction}
                        follow={followThunk}
                        unfollow={unfollowThunk}
                      />
                    ))
                }
      </div>
    </div>
  );
}

export default Users;
