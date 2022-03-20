import LoginForm from "./LoginForm/LoginForm";
import {Navigate} from "react-router-dom";
import React from "react";

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm login={props.login}/>
    </div>
}

export default Login;