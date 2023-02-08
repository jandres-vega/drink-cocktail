import React from 'react';
import imgLanding from "../assets/image 7.png";
import logo from "../assets/image 4.png";
import {Box, Container, Typography} from "@mui/material";
import {CustomerButton} from "../components/atoms/CustomerButton";
import {CustomerInput} from "../components/atoms/CustomerInput";
import {Person, Mail, Key} from '@mui/icons-material';
import '../styles/CreaateAccount.css';
import {Link} from "react-router-dom";

const CreateAccount = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center'}}
        >
            <Typography variant="h5" color="secondary" sx={{zIndex: 1, position: 'absolute', top: 250}}>¡Registrarse!</Typography>
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
                    textHolder="Nombre completo"
                    icon={<Person />}
                    typeText="text"
                    width="100%"
                />
                <CustomerInput
                    textHolder="Correo electronico"
                    icon={<Mail />}
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
                top: 560}}>
                <CustomerButton textButton="Registrarse" color="secondary" width="100%"/>
                <Box sx={{display: 'flex', justifyContent: 'center', mt:2}}>
                    <Typography color="#efefef" sx={{mr: 0.5}} variant="span">Ya tienes cuenta?</Typography>
                    <Link to="/login-user" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Typography color="secondary" variant="span" sx={{cursor: 'pointer'}}>Inicia Sesion</Typography>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export {CreateAccount};