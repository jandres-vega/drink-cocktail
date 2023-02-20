import React from 'react';
<<<<<<< HEAD
import {Box, Checkbox, Grid, Typography} from "@mui/material";
import img1 from "../assets/spaguetis 2.png";
import img2 from "../assets/ratatouille-3306 1.png";
import img3 from "../assets/image 8.png";
import img4 from "../assets/image 9.png";
import '../styles/MakeOrder.css';
=======
import {Box, Grid, Typography} from "@mui/material";
>>>>>>> mirrorMain
import checkPng from '../assets/check 1.png';
import {Footer} from "../components/atoms/Footer";
import {CardDrink} from "../components/organisms/CardDrink";
import {useDispatch, useSelector} from "react-redux";
import {getAllDrinks} from '../redux/actions/actions.drinks';
import '../styles/MakeOrder.css';
import {priceAleatorio} from '../utils/priceRamdon'
import {Loading} from "../components/atoms/Loading";
function MakeOrder() {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const getDrinks = useSelector(state => state.drinkR.allDrinks);
    const getTables = useSelector(state => state.tablesR.tabletSelect);


    React.useEffect(() => {
        dispatch(getAllDrinks()).then(() => {
            setLoading(false)
        })
        setLoading(true)
    },[dispatch])

    return (
        <React.Fragment>
            {
                getTables.length === 0 ?
                    <h1>No hay mesas seleccionadas</h1>:
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 1
                            }}
                        >
                            <Typography variant="h3">{getTables[0].nameTable }</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'}}
                        >
                            {loading && <Loading />}
                            <Grid className="container-make-order" maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }} >
                                {
                                    getDrinks ? getDrinks.map(cardDrink => (
                                        <Grid item key={cardDrink.idDrink} xs={2} sm={4} md={4} sx={{pt:1}}>
                                            <CardDrink
                                                image={cardDrink.strDrinkThumb}
                                                nameDrink={cardDrink.strDrink}
                                                price={priceAleatorio()}
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
                    </>

            }
        </React.Fragment>
    );
}

export {MakeOrder};