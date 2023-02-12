import React from 'react';
import {Box, Container, IconButton, List, Typography} from "@mui/material";
import {CustomerButton} from "../components/atoms/CustomerButton";
import EditIcon from '@mui/icons-material/Edit';

function Orders() {

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Mesa 1</Typography>
            </Box>
            <Container maxWidth="md" sx={{mt:3}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h4">Cant</Typography>
                    <Typography variant="h4">Producto</Typography>
                </Box>
                <List sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{bgcolor: '#efefef',mr:2, width: 120, height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>{3}</Box>
                    <Box sx={{bgcolor: '#efefef', height: 50, width: 400, display: 'flex',pl:2, alignItems: 'center'}}>
                        <Typography variant="span">Producto 1</Typography>
                    </Box>
                </List>
                <List sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{bgcolor: '#efefef',mr:2, width: 120, height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>{3}</Box>
                    <Box sx={{bgcolor: '#efefef', height: 50, width: 400, display: 'flex',pl:2, alignItems: 'center'}}>
                        <Typography variant="span">Producto 1</Typography>
                    </Box>
                </List>
                <List sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{bgcolor: '#efefef',mr:2, width: 120, height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>{3}</Box>
                    <Box sx={{bgcolor: '#efefef', height: 50, width: 400, display: 'flex',pl:2, alignItems: 'center'}}>
                        <Typography variant="span">Producto 1</Typography>
                    </Box>
                </List>
                <List sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{bgcolor: '#efefef',mr:2, width: 120, height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>{3}</Box>
                    <Box sx={{bgcolor: '#efefef', height: 50, width: 400, display: 'flex',pl:2, alignItems: 'center'}}>
                        <Typography variant="span">Producto 1</Typography>
                    </Box>
                </List>
                <List sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{bgcolor: '#efefef',mr:2, width: 120, height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>{3}</Box>
                    <Box sx={{bgcolor: '#efefef', height: 50, width: 400, display: 'flex',pl:2, alignItems: 'center'}}>
                        <Typography variant="span">Producto 1</Typography>
                    </Box>
                </List>
                <List sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{bgcolor: '#efefef',mr:2, width: 120, height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>{3}</Box>
                    <Box sx={{bgcolor: '#efefef', height: 50, width: 400, display: 'flex',pl:2, alignItems: 'center'}}>
                        <Typography variant="span">Producto 1</Typography>
                    </Box>
                </List>
                <List sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{bgcolor: '#efefef',mr:2, width: 120, height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>{3}</Box>
                    <Box sx={{bgcolor: '#efefef', height: 50, width: 400, display: 'flex',pl:2, alignItems: 'center'}}>
                        <Typography variant="span">Producto 1</Typography>
                    </Box>
                </List>
                <Box sx={{display: 'flex', maxWidth: 300, justifyContent: 'space-between'}}>
                    <Box sx={{width: 45, height: 40, bgcolor: "#e8bd0b", borderRadius: 2}}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Box>
                    <CustomerButton textButton="Enviar" />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export {Orders};