import React from 'react';
import confetti from 'canvas-confetti';
import {Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import {useNavigate} from "react-router-dom";
import {updateOrder} from '../services/addOrderToUser';
import {AlertMessage} from "../components/molecules/AlertMessage";
import {clearInitialState} from '../redux/actions/actions';
function Checkout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getDrinksOrder = useSelector(state => state.drinkR.ordersDrinks);
    const [statusPayment, setStatusPayment] = React.useState('')
    const userR = useSelector(state => state.authR.userLogged)
    const {uid}= userR

    const paypalOptions = {
        "client-id": 'ARSQTTgTF6wUOaezIUZvGmKlRxfWM5mB74LSPJyv1bDQLeirm_e0dFZC0AhEtQX5HZni1LZumEGt9zD3',
        intent: 'capture',
        currency: 'USD'
    }
    const buttonStyles = {
        layout: 'vertical',
        shape: 'pill',
    }
    const handlePaymentSuccess = (data, actions) => actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: handleSumTotal()
                }
            }
        ]
    })
    const handleAprove =  (data, actions) =>
        actions.order.capture().then((details) => {
            if (details.status === 'COMPLETED') {
                const newOrder = {
                    product: getDrinksOrder,
                    payment: details
                }
                updateOrder(uid, newOrder);
                setStatusPayment(newOrder.payment.status)
                confetti()
                setTimeout(() => {
                    setStatusPayment('');
                    navigate('/book-a-table');
                    dispatch(clearInitialState())
                },4000)
            }
        })

    const handleSumTotal = () => {
        const total = (acc, item) => {
            return acc + (item.price * item.cont)
        }
        return getDrinksOrder.reduce(total, 0);
    }
    const sucessPayment = () => {
        if (statusPayment === 'COMPLETED'){
            return (
                <AlertMessage success="Su transaccion fue exitosa"/>
            )
        }
    }

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Mesa 1</Typography>
            </Box>
            <List>
                <Container maxWidth="md">
                    {
                        getDrinksOrder.map(drink => (
                            <ListItem disablePadding key={drink.nameDrink}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img style={{width: 50, height: 50}} src={drink.image} alt="img-icon" />
                                    </ListItemIcon>
                                    <ListItemText primary={drink.nameDrink} secondary={`$${drink.price}.000`} />
                                    <Typography variant="span">{drink.cont}</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                    <Box>
                        <Typography>Precio Total: ${handleSumTotal()}.000</Typography>
                    </Box>
                    {
                        getDrinksOrder.length === 0 ? <h1>No hy ordenes en el momento</h1>:
                            <React.Fragment>
                                <PayPalScriptProvider options={paypalOptions}>
                                    <PayPalButtons
                                        style={buttonStyles}
                                        createOrder={(data, actions) =>handlePaymentSuccess(data, actions)}
                                        onApprove={(data, actions) =>handleAprove(data, actions)}
                                    />
                                </PayPalScriptProvider>
                            </React.Fragment>
                    }
                    {
                        sucessPayment()
                    }
                </Container>
            </List>
        </React.Fragment>
    );
}

export {Checkout};