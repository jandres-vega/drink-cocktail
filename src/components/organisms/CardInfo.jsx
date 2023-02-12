import React from 'react';
import {Box, Card, CardMedia, Container, Typography} from "@mui/material";
const CardInfo = ({Icon, image, component,nameDrink}) => {
    return (
        <Card sx={{ maxWidth: 300, minHeight: 100 }}>
            <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                {Icon}
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
export {CardInfo};