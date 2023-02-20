import React from 'react';
import {Outlet, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectRoutes = () => {

    const currenUser = useSelector(state => state.authR.userLogged);
    if (currenUser === null){
        return(
            <Navigate to="/" />
        )
    }
    return (
        <Outlet />
    );
};

export {ProtectRoutes};