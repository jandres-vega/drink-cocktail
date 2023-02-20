import React from 'react';
import imgLanding from '../assets/image 7.png';
import logo from '../assets/image 4.png'
import {Box} from "@mui/material";
import {Link, Navigate} from 'react-router-dom';
import {CustomerButton} from "../components/atoms/CustomerButton";
import '../styles/LandingPage.css';
import {useSelector} from "react-redux";
const LandingPage = () => {

    const currenUser = useSelector(state => state.authR.userLogged);
    if (currenUser){
        return (
            <Navigate to="/book-a-table" />
        )
    }
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}
        >
            <img className="img-landing" src={imgLanding} alt={'img-landing'}/>
            <Box sx={{display: 'flex', justifyContent: 'center', position: 'absolute', top: 150}}>
                <img className="logo-img" src={logo} alt="logo"/>
            </Box>
            <Box sx={{position: 'absolute', bottom: 200}}>
                <Link to="/create-account" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <CustomerButton width={250} color="secondary" textButton="Siguiente" />
                </Link>
            </Box >
        </Box>
    );
};

export {LandingPage};