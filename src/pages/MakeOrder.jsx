import React from 'react';
import {Box, Checkbox, Container, Grid, Typography} from "@mui/material";
import img1 from "../assets/spaguetis 2.png";
import img2 from "../assets/ratatouille-3306 1.png";
import img3 from "../assets/image 8.png";
import img4 from "../assets/image 9.png";
import '../styles/MakeOrder.css';
import checkPng from '../assets/check 1.png';
import {Footer} from "../components/atoms/Footer";
import {MaxMin} from "../components/molecules/MaxMin";
import {CardInfo} from "../components/organisms/CardInfo";
function MakeOrder() {
    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Mesa 1</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Grid maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }} className="container-make-order" >
                    <Grid item xs={2} sm={4} md={4} sx={{pt:1}} >
                        <CardInfo Icon={<Checkbox />} image={img1} component={<MaxMin />}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p:1}}>
                        <CardInfo Icon={<Checkbox />} image={img2} component={<MaxMin />}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p:1}}>
                        <CardInfo Icon={<Checkbox />} image={img3} component={<MaxMin />}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p:1}}>
                        <CardInfo Icon={<Checkbox />} image={img4} component={<MaxMin />}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p:1}}>
                        <CardInfo Icon={<Checkbox />} image={img1} component={<MaxMin />}/>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{p:1}}>
                        <CardInfo Icon={<Checkbox />} image={img2} component={<MaxMin />}/>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}} className="icon-checker-make">
                <Box sx={{ width: 40, textAlign: 'center', height: 40, bgcolor: "#02A337", mb: 2, borderRadius: 3}}>
                    <img src={checkPng} alt="check" />
                </Box>
            </Box>
            <Footer />
        </React.Fragment>
    );
}

export {MakeOrder};