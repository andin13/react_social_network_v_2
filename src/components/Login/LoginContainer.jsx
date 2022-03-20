import {login} from "../../Redux/authReducer";
import Login from "./Login";
import React from "react";
import connect from "react-redux/lib/connect/connect";

class LoginContainer extends React.Component {
    render() {
        return <Login login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(LoginContainer);