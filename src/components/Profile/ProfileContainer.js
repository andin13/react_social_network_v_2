import React from "react";
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import {getProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import {useParams} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.PureComponent {
    setProfile() {
        if (this.props.userId || this.props.currentUserId) {
            this.props.getProfile(this.props.userId ? this.props.userId : this.props.currentUserId);
            this.props.getStatus(this.props.userId ? this.props.userId : this.props.currentUserId);
        }
    }

    componentDidMount() {
        this.setProfile();
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.profile) {
            this.setProfile();
        }
    }*/

    render() {
        if (this.props.userId || this.props.currentUserId) {
            return (
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            )
        }
        return <Preloader/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserId: state.auth.userId,
    status: state.profilePage.status
});

const WithUrlDataContainerComponent = (props) => {
    const {userId} = useParams();
    return (
        <ProfileContainer {...props} userId={userId}/>
    )
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus})
)(WithUrlDataContainerComponent)