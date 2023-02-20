import React from 'react';
import {Box, Container, IconButton, List, Typography} from "@mui/material";
import {CustomerButton} from "../components/atoms/CustomerButton";
import EditIcon from '@mui/icons-material/Edit';
import { useSelector} from "react-redux";
import {Link} from 'react-router-dom';
function Orders() {
    const orderDrinks = useSelector(state => state.drinkR.ordersDrinks);
    const tables = useSelector(state => state.tablesR.tabletSelect);

    return (
        <React.Fragment>
            {tables.length === 0 ? <h1>No tiene ningun Producto agregado</h1>:
                <>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                        <Typography variant="h3">{tables[0].nameTable}</Typography>
                    </Box>
                    <Container maxWidth="md" sx={{mt:3}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="h4">Cant</Typography>
                            <Typography variant="h4">Producto</Typography>
                        </Box>
                        {
                            orderDrinks.length === 0 ?
                                <h1>No has seleccionado ningun cocktail</h1>
                                :orderDrinks.map(order => (
                                    <List
                                        key={order.nameDrink}
                                        sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                        <Box
                                            sx={{bgcolor: '#efefef'
                                                ,mr:2,
                                                width: 120,
                                                height: 50,
                                                alignItems: 'center',
                                                display: 'flex',
                                                justifyContent: 'center'}}
                                        >
                                            {order.cont}
                                        </Box>
                                        <Box
                                            sx={{bgcolor: '#efefef',
                                                height: 50,
                                                width: 400,
                                                display: 'flex',
                                                pl:2,
                                                alignItems: 'center'}}
                                        >
                                            <Typography variant="span">{order.nameDrink}</Typography>
                                        </Box>
                                    </List>
                                ))
                        }
                        <Box sx={{display: 'flex', maxWidth: 300, justifyContent: 'space-between'}}>
                            <Box sx={{width: 45, height: 40, bgcolor: "#e8bd0b", borderRadius: 2}}>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Box>
                            <Link to="/bill-order">
                                <CustomerButton textButton="Enviar" />
                            </Link>
                        </Box>
                    </Container>
                </>
            }
        </React.Fragment>
    );
}

export {Orders};