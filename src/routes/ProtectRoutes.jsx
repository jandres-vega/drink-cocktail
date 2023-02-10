import React from 'react';
import {Outlet, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectRoutes = () => {

    const currenUser = useSelector(state => state.userLogged);
    if (currenUser === null){
        return(
            <Navigate to="/login-user" />
        )
    }
    return (
        <Outlet />
    );
};

export {ProtectRoutes};