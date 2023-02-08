import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import imgLanding from "../assets/image 7.png";
import logo from "../assets/image 4.png";
import {CustomerInput} from "../components/atoms/CustomerInput";
import {Key, Person} from "@mui/icons-material";
import {CustomerButton} from "../components/atoms/CustomerButton";
import {Link} from "react-router-dom";

const LoginUser = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center'}}
        >
            <Typography variant="h5" color="secondary" sx={{zIndex: 1, position: 'absolute', top: 250}}>Iniciar Sesion</Typography>
            <img className="img-landing" src={imgLanding} alt={'img-landing'}/>
            <img className="logo-img-account" src={logo} alt="logo"/>
            <Container maxWidth="xs" sx={{
                zIndex: 1,
                position: 'absolute',
                top: 300}}
            >
                <CustomerInput
                    textHolder="Username"
                    icon={<Person />}
                    typeText="text"
                    width="100%"
                />
                <CustomerInput
                    textHolder="Contraseña"
                    icon={<Key />}
                    typeText="password"
                    width="100%"
                />
            </Container>
            <Container maxWidth="xs" sx={{
                position: 'absolute',
                top: 560}}
            >
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <CustomerButton textButton="Iniciar Sesion" color="secondary" width="100%"/>
                </Link>
                <Box sx={{display: 'flex', justifyContent: 'center', mt:2}}>
                    <Typography color="#efefef" sx={{mr: 0.5}} variant="span">A un no tienes cuenta?</Typography>
                    <Link to="/create-account" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Typography color="secondary" variant="span" sx={{cursor: 'pointer'}}>Registrate</Typography>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export {LoginUser};