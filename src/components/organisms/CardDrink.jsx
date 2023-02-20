import React from 'react';
import {Box, Card, CardMedia, Container, Typography} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {addDrinksToOrder, deleteDrinkOdOrder} from '../../redux/actions/actions.drinks';
import {useDispatch} from "react-redux";
import {MaxMin} from "../molecules/MaxMin";
const CardDrink = ({ image, nameDrink, price}) => {
    let [cont, setCont] = React.useState(1);
    const [checked, setChecked] = React.useState(false);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        if (!checked){
            dispatch(addDrinksToOrder({image, nameDrink, cont, price}));
            setChecked(event.target.checked);
        }else {
            dispatch(deleteDrinkOdOrder(nameDrink))
            setChecked(event.target.checked);
        }
    };

    return (
        <Card sx={{ maxWidth: 300, minHeight: 100 }}>
            <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Box>
            <Container sx={{display: 'flex', justifyContent: 'center',p:2,  color: '#00000024'}}>
                <CardMedia
                    component="img"
                    height="150"
                    image={image}
                    alt="img-table"
                />
            </Container>
            <Typography sx={{textAlign: 'center'}}>{nameDrink}</Typography>
            <Typography sx={{textAlign: 'center'}}>$ {price}.000</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <MaxMin cont={cont} setCont={setCont} />
            </Box>
        </Card>
    );
};

export {CardDrink};