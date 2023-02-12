import React from 'react';
import {Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import img12 from '../assets/image 9.png';
import {CustomerButton} from "../components/atoms/CustomerButton";
function Checkout() {
    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Mesa 1</Typography>
            </Box>
            <List>
                <Container maxWidth="md">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={img12} alt="img-icon" />
                            </ListItemIcon>
                            <ListItemText primary="San francisco" secondary="$ 25.000" />
                            <Typography variant="span">{2}</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={img12} alt="img-icon" />
                            </ListItemIcon>
                            <ListItemText primary="San francisco" secondary="$ 25.000" />
                            <Typography variant="span">{2}</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={img12} alt="img-icon" />
                            </ListItemIcon>
                            <ListItemText primary="San francisco" secondary="$ 25.000" />
                            <Typography variant="span">{2}</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={img12} alt="img-icon" />
                            </ListItemIcon>
                            <ListItemText primary="San francisco" secondary="$ 25.000" />
                            <Typography variant="span">{2}</Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={img12} alt="img-icon" />
                            </ListItemIcon>
                            <ListItemText primary="San francisco" secondary="$ 25.000" />
                            <Typography variant="span">{2}</Typography>
                        </ListItemButton>
                    </ListItem>
                    <CustomerButton textButton="Pagar"  width="100%"/>
                </Container>
            </List>
        </React.Fragment>
    );
}

export {Checkout};