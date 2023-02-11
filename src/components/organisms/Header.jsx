import React from 'react';
import {AppBar} from "@mui/material";
import {NavBar} from "../molecules/navBar";

const Header = () => {
    return (
        <AppBar position="static">
            <NavBar />
        </AppBar>
    );
};

export {Header};