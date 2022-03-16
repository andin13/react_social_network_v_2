import React from "react";
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import {getProfile, setUserProfile} from "../../Redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.PureComponent {
    setProfile() {
        if (this.props.userId || this.props.currentUserId) {
            this.props.getProfile(this.props.userId ? this.props.userId : this.props.currentUserId);
        }
    }

    componentDidMount() {
        this.setProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setProfile();
    }

    render() {
        if (!this.props.isAuth) {return <Navigate to={'/login'}/>}
        if (this.props.userId || this.props.currentUserId) {
            return (
                <Profile {...this.props} profile={this.props.profile}/>
            )
        }
        return <Preloader/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserId: state.auth.userId
});

const WithUrlDataContainerComponent = (props) => {
    const {userId} = useParams();
    return (
        <ProfileContainer {...props} userId={userId}/>
    )
}

export default connect(mapStateToProps, {setUserProfile, getProfile})(withAuthRedirect(WithUrlDataContainerComponent));