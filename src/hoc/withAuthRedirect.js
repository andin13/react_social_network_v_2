import {Component} from "react";
import React from "react";
import {Navigate} from "react-router-dom";
import connect from "react-redux/lib/connect/connect";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            } else return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}