import React from 'react';
import {Header} from "../components/organisms/Header";

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
};

export {Layout};