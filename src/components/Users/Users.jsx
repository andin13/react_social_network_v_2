import React, { useEffect } from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import {follow, setPage, toggleFollowingProgress, requestUsers, updateUsers, unfollow} from "../../Redux/users-reducer";
import {
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getIsFetching,
} from "../../Redux/users-selectors";

const Users = () => {

        const users = useSelector(state => getUsers(state));
        const pageSize = useSelector(state => getPageSize(state));
        const totalUsersCount = useSelector(state => getTotalUsersCount(state));
        const followingInProgress = useSelector(state => getFollowingInProgress(state));
        const isFetching = useSelector(state => getIsFetching(state));
        const {currentPageUrl} = useParams();

        const dispatch = useDispatch();

        const followFn = (userId) => dispatch(follow(userId));
        const unfollowFn = (userId) => dispatch(unfollow(userId));
        const toggleFollowingProgressFn = (isFetching, userId) => dispatch(toggleFollowingProgress(isFetching, userId));
        const setPageFn = (page) => dispatch(setPage(page));
        const requestUsersFn = () => dispatch(requestUsers(currentPageUrl, pageSize));
        const updateUsersFn = (currentPage, pageSize) => dispatch(updateUsers(currentPage, pageSize));

        const onPageChanged = (pageNumber) => {
                updateUsersFn(pageNumber, pageSize);
                setPageFn(+pageNumber);
            }

        useEffect(() => requestUsersFn(), [])

        if (isFetching) return <Preloader/>
        return <div>
            <Paginator totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPageUrl}
                        baseUrl={'/users/'}
                        onPageChanged={onPageChanged}/>
            <div>
                {
                    users.map(u => <User user={u}
                                                key={u.id}
                                                followingInProgress={followingInProgress}
                                                toggleFollowingProgress={toggleFollowingProgressFn}
                                                follow={followFn}
                                                unfollow={unfollowFn}
                    />)
                }
            </div>
        </div>
}

export default Users;