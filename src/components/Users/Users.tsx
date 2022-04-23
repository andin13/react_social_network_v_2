import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActionsAndThunks } from '../../hooks/useActionsAndThunks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';

import User from './User/User';

type useParamsType = {
  currentPageUrl: string;
}

function Users(): JSX.Element {
  const users = useTypedSelector((state) => state.users.users);
  const pageSize = useTypedSelector((state) => state.users.pageSize);
  const totalUsersCount = useTypedSelector((state) => state.users.totalUsersCount);
  const followingInProgress = useTypedSelector((state) => state.users.followingInProgress);
  const isFetching = useTypedSelector((state) => state.users.isFetching);
  const { currentPageUrl } = useParams<useParamsType>();
  let currentPage = 1;
  if (currentPageUrl) {
    currentPage = +currentPageUrl;
  }

  const {
    setPageAction, requestUsersThunk, updateUsersThunk,
  } = useActionsAndThunks();

  const onPageChanged = (pageNumber: number) => {
    updateUsersThunk(pageNumber, pageSize);
    setPageAction(+pageNumber);
  };

  const requestUsers = () => {
    requestUsersThunk(currentPage, pageSize);
  };

  useEffect(() => requestUsers(), []);

  if (isFetching) return <Preloader />;
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        baseUrl="/users/"
        onPageChanged={onPageChanged}
        portionSize={10}
      />
      <div>
        {
                    users.map((u) => (
                      <User
                        user={u}
                        key={u.id}
                        followingInProgress={followingInProgress}
                      />
                    ))
                }
      </div>
    </div>
  );
}

export default Users;
