import React from 'react';
import {Avatar, Box, Button, Container, IconButton, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {Liquor} from '@mui/icons-material';
import {signOutUser} from '../../redux/actions/actions';
import {useDispatch} from "react-redux";
const pages = ['Recervar mesa', 'Realizar pedido', 'Pedido', 'Factura'];
const settings = ['Perfil', 'Cuenta', 'Cerrar sesion']


const NavBar = () => {
    const dispatch = useDispatch();
    const [openMenuNav, setOpenMenuNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setOpenMenuNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setOpenMenuNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSignOutUser = () => {
        dispatch(signOutUser())
    }
    return (
        <Container maxWidth="xl">
            <Toolbar>
                <Liquor sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={handleOpenNavMenu}
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={openMenuNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}

                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(openMenuNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{flexGrow: 0}}>
                    <Tooltip title="Configuracion">
                        <IconButton onClick={handleOpenUserMenu}>
                            <Avatar />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {/*{settings.map((setting) => (*/}
                        {/*    <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                        {/*        <Typography textAlign="center">Cerrar sesion</Typography>*/}
                        {/*    </MenuItem>*/}
                        {/*))}*/}
                        <MenuItem  onClick={handleCloseUserMenu}>
                            <Typography onClick={handleSignOutUser} textAlign="center">Cerrar sesion</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    );
};

export {NavBar};