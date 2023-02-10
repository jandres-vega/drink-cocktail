import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LandingPage} from "../pages/LandingPage";
import {CreateAccount} from "../pages/CreateAccount";
import {LoginUser} from "../pages/LoginUser";
import {Layout} from "../containers/Layout";
import {Home} from "../pages/Home";
import {ProtectRoutes} from "./ProtectRoutes";
import {useDispatch} from "react-redux";
import {currentUser} from '../redux/actions/actions';
function App() {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(currentUser());
    },[dispatch])

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/create-account" element={<CreateAccount />} />
                <Route exact path="/login-user" element={<LoginUser />} />
                <Route element={<ProtectRoutes />}>
                    <Route path="/" element={<Layout />} >
                        <Route path="home" element={<Home />} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Route>
                </Route>


            </Routes>
        </BrowserRouter>
    );
}

export {App};
