import LoginForm from "./LoginForm/LoginForm";
import {Navigate} from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../Redux/auth-reducer";

function Login() {

    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();
    const loginButton = (email, password, rememberMe) => dispatch(login(email, password, rememberMe));

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm login={loginButton}/>
    </div>
}

export default Login;