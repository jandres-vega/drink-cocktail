import React from 'react';
import {AppBar} from "@mui/material";
import {NavBar} from "../molecules/navBar";

const Header = () => {
    return (
        <header>
            <AppBar position="static">
                <NavBar />
            </AppBar>
        </header>
    );
};

export {Header};