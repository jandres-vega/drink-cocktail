import React from 'react';
import {Box, Card, CardMedia, Container,  Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {saveOrderOfDrinks, updateReservedTable} from '../../redux/actions/actions.tables';
import {useDispatch} from "react-redux";
const CardTable = ({ image,nameTable,id, reserved}) => {
    const [checked, setChecked] = React.useState(reserved);
    const dispatch = useDispatch();
    const handleChange = () => {
        setChecked(!checked);
        dispatch(updateReservedTable(id, checked))
        dispatch(saveOrderOfDrinks({ image,nameTable,id, reserved}))
    };

    return (
        <Card sx={{ maxWidth: 300, minHeight: 100 }}>
            <Box  sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Checkbox
                    checked={reserved? reserved: checked }
                    disabled={reserved}
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
            <Typography sx={{textAlign: 'center'}}>{nameTable}</Typography>
        </Card>
    );
};
export {CardTable};