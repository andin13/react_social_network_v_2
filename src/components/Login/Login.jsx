import LoginForm from "./LoginForm/LoginForm";
import {Navigate} from "react-router-dom";
import React from "react";

const Login = ({isAuth, login}) => {
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm login={login}/>
    </div>
}

export default Login;