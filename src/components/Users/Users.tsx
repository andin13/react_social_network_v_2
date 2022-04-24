import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { usersSlice } from '../../toolkitRedux/slices/users/slice';
import { requestUsersThunk, updateUsersThunk } from '../../toolkitRedux/slices/users/thunks';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';

import User from './User/User';

type useParamsType = {
  currentPageUrl: string;
}

function Users(): JSX.Element {
  const users = useTypedSelector((state) => state.UsersReducer.users);
  const pageSize = useTypedSelector((state) => state.UsersReducer.pageSize);
  const totalUsersCount = useTypedSelector((state) => state.UsersReducer.totalUsersCount);
  const followingInProgress = useTypedSelector((state) => state.UsersReducer.followingInProgress);
  const isFetching = useTypedSelector((state) => state.UsersReducer.isFetching);
  const dispatch = useDispatch();
  const { currentPageUrl } = useParams<useParamsType>();
  let currentPage = 1;
  if (currentPageUrl) {
    currentPage = +currentPageUrl;
  }

  const { setPage } = usersSlice.actions;

  const onPageChanged = (pageNumber: number) => {
    dispatch(updateUsersThunk(pageNumber, pageSize));
    setPage(+pageNumber);
  };

  const requestUsers = () => {
    dispatch(requestUsersThunk(currentPage, pageSize));
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
