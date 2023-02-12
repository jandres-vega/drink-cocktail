import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import imgLanding from "../assets/image 7.png";
import logo from "../assets/image 4.png";
import {CustomerInput} from "../components/atoms/CustomerInput";
import {Key, Email} from "@mui/icons-material";
import {CustomerButton} from "../components/atoms/CustomerButton";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginWithEmail} from '../redux/actions/actions.auth';
import {AlertMessage} from "../components/molecules/AlertMessage";

const LoginUser = () => {
    const currenUser = useSelector(state => state.userLogged );
    const[user, setUser] = React.useState({
        email: '',
        password: ''
    })

    const [error, setError] = React.useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLoginWithEmail = () => {
        dispatch(loginWithEmail(user)).then( () => {
            navigate('/book-a-table')
        }).catch((e) => {
            if (e.code === 'auth/user-not-found'){
                setError('El usuario que ingresaste no esta registrado')
                navigate('/login-user')
            }else if(e.code === 'auth/wrong-password') {
                setError('La contraseña es incorrecta')
            }
        })
    }

    const handnleGetValueInput = (userValue, name) => {
        setUser({
            ...user,
            [name]: userValue
        })
    }

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
                    textHolder="Email"
                    icon={<Email />}
                    typeText="text"
                    width="100%"
                    name="email"
                    getValueInput={(user, name) => handnleGetValueInput(user, name)}
                />
                <CustomerInput
                    textHolder="Contraseña"
                    icon={<Key />}
                    name="password"
                    typeText="password"
                    width="100%"
                    getValueInput={(user, name) => handnleGetValueInput(user, name)}
                />
                {
                    error && (<AlertMessage error={error} />)
                }
            </Container>
            <Container maxWidth="xs" sx={{
                position: 'absolute',
                top: 560}}
            >
                <CustomerButton textButton="Iniciar Sesion" color="secondary" width="100%" dispatch={handleLoginWithEmail}/>
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