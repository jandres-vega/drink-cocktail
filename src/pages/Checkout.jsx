import React from 'react';
import {Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import img12 from '../assets/image 9.png';
import {CustomerButton} from "../components/atoms/CustomerButton";
import {useSelector} from "react-redux";
function Checkout() {

    const getDrinksOrder = useSelector(state => state.drinkR.ordersDrinks);

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Mesa 1</Typography>
            </Box>
            <List>
                <Container maxWidth="md">
                    {
                        getDrinksOrder.map(drink => (
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img style={{width: 50, height: 50}} src={drink.image} alt="img-icon" />
                                    </ListItemIcon>
                                    <ListItemText primary={drink.nameDrink} secondary="$ 25.000" />
                                    <Typography variant="span">{drink.cont}</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                    {
                        getDrinksOrder.length === 0 ? <h1>No hy ordenes en el momento</h1>:
                            <CustomerButton textButton="Pagar"  width="100%"/>
                    }
                </Container>
            </List>
        </React.Fragment>
    );
}

export {Checkout};