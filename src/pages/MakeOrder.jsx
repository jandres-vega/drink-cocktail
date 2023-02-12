import React from 'react';
import {Box, Checkbox, Grid, Typography} from "@mui/material";
import checkPng from '../assets/check 1.png';
import {Footer} from "../components/atoms/Footer";
import {MaxMin} from "../components/molecules/MaxMin";
import {CardInfo} from "../components/organisms/CardInfo";
import {useDispatch, useSelector} from "react-redux";
import {getAllDrinks} from '../redux/actions/actions';
import '../styles/MakeOrder.css';
function MakeOrder() {

    const dispatch = useDispatch();
    const getDrinks = useSelector(state => state.allDrinks);

    React.useEffect(() => {
        dispatch(getAllDrinks())
    },[dispatch])

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 1
                }}
            >
                <Typography variant="h3">Mesa 1</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'}}
            >
                <Grid maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }} className="container-make-order" >
                    {
                        getDrinks ? getDrinks.map(cardDrink => (
                            <Grid item key={cardDrink.idDrink} xs={2} sm={4} md={4} sx={{pt:1}}>
                                <CardInfo
                                    Icon={<Checkbox />}
                                    image={cardDrink.strDrinkThumb}
                                    component={<MaxMin />}
                                    nameDrink={cardDrink.strDrink}
                                />
                            </Grid>
                        )): null
                    }
                </Grid>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }} className="icon-checker-make">
                <Box sx={{
                        width: 40,
                        textAlign: 'center',
                        height: 40,
                        bgcolor: "#02A337",
                        mb: 2,
                        borderRadius: 3
                    }}
                >
                    <img src={checkPng} alt="check" />
                </Box>
            </Box>
            <Footer />
        </React.Fragment>
    );
}

export {MakeOrder};