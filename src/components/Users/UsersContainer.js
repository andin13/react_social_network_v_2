import React from "react";
import connect from "react-redux/lib/connect/connect";
import Users from "./Users";
import {follow, setPage, toggleFollowingProgress, requestUsers, updateUsers, unfollow} from "../../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";
import {useParams} from "react-router-dom";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.updateUsers(pageNumber, pageSize);
        this.props.setPage(+pageNumber);
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : <Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             users={this.props.users}
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
                             followingInProgress={this.props.followingInProgress}
                             toggleFollowingProgress={this.props.toggleFollowingProgress}
                    />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const WithUrlDataContainerComponent = (props) => {
    const {currentPage} = useParams();
    return (
        <UsersAPIComponent {...props} currentPage={currentPage}/>
    )
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setPage, toggleFollowingProgress, requestUsers, updateUsers})
)(WithUrlDataContainerComponent);