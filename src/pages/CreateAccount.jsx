import React from 'react';
import imgLanding from "../assets/image 7.png";
import logo from "../assets/image 4.png";
import {Box, Container, Typography} from "@mui/material";
import {CustomerButton} from "../components/atoms/CustomerButton";
import {CustomerInput} from "../components/atoms/CustomerInput";
import {Person, Mail, Key} from '@mui/icons-material';
import '../styles/CreaateAccount.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerWithEmail} from '../redux/actions/actions.auth';
import {AlertMessage} from "../components/molecules/AlertMessage";

const CreateAccount = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [error, setError] = React.useState('')

    const [value, setValue] = React.useState({
        userName: '',
        fullName: '',
        email: '',
        password: ''
    });
    const handleGetValue = (valueInput, name) => {
        setValue({
            ...value,
            [name]: valueInput
        })
    }
    const handleRegisterWithEmail = () => {
        dispatch(registerWithEmail(value)).then(() => {
            navigate('/book-a-table')
        }).catch( (e) => {
            if (e.code === 'auth/invalid-email'){
                setError('Correo Incorrecto')
            }else if(e.code === 'auth/weak-password'){
                setError('Ingrese una contrase de 8 o mas digitos')
            }else {
                setError('El usuario ya se encuentra registrado')
            }
            setTimeout(() => {
                setError(null)
            },3000)
        })
    }
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
                    name="userName"
                    getValueInput={(value, name) => handleGetValue(value, name)}
                />
                <CustomerInput
                    textHolder="Nombre completo"
                    icon={<Person />}
                    typeText="text"
                    width="100%"
                    name="fullName"
                    getValueInput={(value, name) => handleGetValue(value, name)}
                />
                <CustomerInput
                    textHolder="Correo electronico"
                    icon={<Mail />}
                    typeText="text"
                    width="100%"
                    error={(error === 'Correo Incorrecto') ? error:null}
                    name="email"
                    getValueInput={(value, name) => handleGetValue(value, name)}
                />
                <CustomerInput
                    textHolder="Contraseña"
                    icon={<Key />}
                    typeText="password"
                    width="100%"
                    name="password"
                    error={(error === 'Ingrese una contrase de 8 o mas digitos') ? error: null}
                    getValueInput={(value, name) => handleGetValue(value, name)}
                />
            </Container>
            <Container maxWidth="xs" sx={{
                position: 'absolute',
                top: 600}}>
                <CustomerButton textButton="Registrarse" color="secondary" width="100%" dispatch={handleRegisterWithEmail}/>
                <Box sx={{display: 'flex', justifyContent: 'center', mt:2}}>
                    <Typography color="#efefef" sx={{mr: 0.5}} variant="span">Ya tienes cuenta?</Typography>
                    <Link to="/login-user" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Typography color="secondary" variant="span" sx={{cursor: 'pointer'}}>Inicia Sesion</Typography>
                    </Link>
                </Box>
                {
                    error && <AlertMessage error={error} />
                }
            </Container>
        </Box>
    );
};

export {CreateAccount};