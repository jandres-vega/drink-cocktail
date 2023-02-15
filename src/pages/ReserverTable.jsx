import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {CustomerButton} from "../components/atoms/CustomerButton";
import {CardTable} from "../components/organisms/CardTable";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const ReserveTable = () => {
    const allTables = useSelector(state => state.tablesR.tables);

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Cocktails</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', mt:-2, flexDirection: 'column', alignItems: 'center'}}>
                <Grid maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }}  >
                    {
                        allTables.map(table => (
                            <Grid key={table.nameTable} item xs={2} sm={4} md={4} sx={{ p: 3}} >
                                <CardTable image={table.image} nameDrink={table.nameTable} />
                            </Grid>
                        ))
                    }
                </Grid>
                <Box>
                    <Link to="/make-an-order">
                        <CustomerButton textButton="Siguiente" color="secondary"/>
                    </Link>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export {ReserveTable};