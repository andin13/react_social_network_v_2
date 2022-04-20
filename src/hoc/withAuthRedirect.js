import {Component} from "react";
import React from "react";
import {Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';


export function withAuthRedirect(Component) {

    function RedirectComponent() {

        const isAuth = useSelector(state => state.auth.isAuth);

        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component />
    }

    return RedirectComponent;
    
}