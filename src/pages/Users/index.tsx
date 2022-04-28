import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Paginator from '../../components/Paginator/Paginator';
import Preloader from '../../components/Preloader/Preloader';
import { componentsRoutes } from '../../constants/componentsRoutes';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { usersSlice } from '../../redux/slices/users/slice';
import { requestUsersThunk, updateUsersThunk } from '../../redux/slices/users/thunks';

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
        baseUrl={`/${componentsRoutes.USERS}/`}
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
