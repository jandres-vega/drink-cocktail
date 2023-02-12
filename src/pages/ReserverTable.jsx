import React from 'react';
import {Box, Checkbox, Container, Grid, Typography} from "@mui/material";
import imgTable from '../assets/mesa1 2.png';
import {CustomerButton} from "../components/atoms/CustomerButton";
import {CardInfo} from "../components/organisms/CardInfo";
const ReserveTable = () => {
    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Mesa 1</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', mt:5, flexDirection: 'column', alignItems: 'center'}}>
                <Grid maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }}  >
                    <Grid item xs={2} sm={4} md={4} sx={{ p: 3}}>
                        <CardInfo Icon={<Checkbox />} image={imgTable} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{ p: 3}}>
                        <CardInfo Icon={<Checkbox />} image={imgTable} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{ p: 3}}>
                        <CardInfo Icon={<Checkbox />} image={imgTable}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p: 3}} >
                        <CardInfo Icon={<Checkbox />} image={imgTable}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p: 3}}>
                        <CardInfo Icon={<Checkbox />} image={imgTable}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p: 3}}>
                        <CardInfo Icon={<Checkbox />} image={imgTable}/>
                    </Grid>
                </Grid>
                <Box>
                    <CustomerButton textButton="Siguiente" color="secondary"/>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export {ReserveTable};