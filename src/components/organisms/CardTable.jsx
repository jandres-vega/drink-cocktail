import React from 'react';
import {Box, Card, CardMedia, Container,  Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {saveOrderOfDrinks} from '../../redux/actions/actions.tables';
import {useDispatch, useSelector} from "react-redux";

const CardTable = ({ image, component,nameDrink}) => {

    const getSelectTable = useSelector(state => state.tablesR.tabletSelect.length === 0 ?
        false: state.tablesR.tabletSelect);
    const [checked, setChecked] = React.useState(getSelectTable);
    const dispatch = useDispatch();

    const handleChange = (event, nameTable) => {
        if (!checked){
            dispatch(saveOrderOfDrinks({nameTable: nameTable, reserved: !checked}));
            setChecked(!checked);
        }
        setChecked(!checked)
    };

    return (
        <Card sx={{ maxWidth: 300, minHeight: 100 }}>
            <Box  sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Checkbox
                    checked={!checked ? false :getSelectTable[0].nameTable === nameDrink}
                    onChange={(e) => handleChange(e, nameDrink)}
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
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                {
                    component ? component: null
                }
            </Box>
        </Card>
    );
};
export {CardTable};