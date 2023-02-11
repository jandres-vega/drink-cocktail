import React from 'react';
import {Box, Checkbox, Container, Grid} from "@mui/material";
import imgTable from '../assets/mesa1 2.png';
import {CustomerButton} from "../components/atoms/CustomerButton";
const ReserveTable = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mt:5, flexDirection: 'column', alignItems: 'center'}}>
            <Grid maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }}  >
                <Grid item xs={2} sm={4} md={4} sx={{ p: 3}}>
                    <Container sx={{display: 'flex', justifyContent: 'center',p:2, border: 1, borderRadius: 2, color: '#00000024'}}>
                        <img style={{width: '70%'}} src={imgTable} alt="img-table" />
                        <Box>
                            <Checkbox />
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={2} sm={4} md={4} sx={{ p: 3}}>
                    <Container sx={{display: 'flex', justifyContent: 'center', border: 1,p:2, borderRadius: 2, color: '#00000024'}}>
                        <img style={{width: '70%'}} src={imgTable} alt="img-table" />
                        <Box>
                            <Checkbox />
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={2} sm={4} md={4} sx={{ p: 3}}>
                    <Container sx={{display: 'flex', justifyContent: 'center', border: 1,p:2, borderRadius: 2, color: '#00000024'}}>
                        <img style={{width: '70%'}} src={imgTable} alt="img-table" />
                        <Box>
                            <Checkbox />
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={2} sm={4} md={4} sx={{p: 3}} >
                    <Container sx={{display: 'flex', justifyContent: 'center', border: 1,p:2, borderRadius: 2, color: '#00000024'}}>
                        <img style={{width: '70%'}} src={imgTable} alt="img-table" />
                        <Box>
                            <Checkbox />
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={2} sm={4} md={4} sx={{p: 3}}>
                    <Container sx={{display: 'flex', justifyContent: 'center', border: 1,p:2, borderRadius: 2, color: '#00000024'}}>
                        <img style={{width: '70%'}} src={imgTable} alt="img-table" />
                        <Box>
                            <Checkbox />
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={2} sm={4} md={4} sx={{p: 3}}>
                    <Container sx={{display: 'flex', justifyContent: 'center', border: 1,p:2, borderRadius: 2, color: '#00000024'}}>
                        <img style={{width: '70%'}} src={imgTable} alt="img-table" />
                        <Box>
                            <Checkbox />
                        </Box>
                    </Container>
                </Grid>
            </Grid>
            <Box>
                <CustomerButton textButton="Siguiente" color="secondary"/>
            </Box>
        </Box>
    );
};

export {ReserveTable};