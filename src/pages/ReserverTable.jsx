import React from 'react';
<<<<<<< HEAD
import {Box, Checkbox, Grid, Typography} from "@mui/material";
import imgTable from '../assets/mesa1 2.png';
=======
import {Box, Grid, Typography} from "@mui/material";
>>>>>>> mirrorMain
import {CustomerButton} from "../components/atoms/CustomerButton";
import {CardTable} from "../components/organisms/CardTable";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllTables} from '../redux/actions/actions.tables';
import {Loading} from "../components/atoms/Loading";
const ReserveTable = () => {
    const dispatch = useDispatch();
    const allTables = useSelector(state => state.tablesR.tables);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        try {
            dispatch(getAllTables()).then(() => {
                setLoading(false);
            })
            setLoading(true);
        }catch (e) {
            console.error(e)
        }
    },[dispatch])

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Typography variant="h3">Cocktails</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', mt:-2, flexDirection: 'column', alignItems: 'center'}}>
                {loading && <Loading />}
                <Grid maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }}  >
                    {
                        allTables.map(table => (
                            <Grid key={table.table} item xs={2} sm={4} md={4} sx={{ p: 3}} >
                                <CardTable image={table.image} nameTable={table.table} id={table.id} reserved={table.reserved} />
                            </Grid>
                        ))
                    }
                </Grid>
                <Box>
                    {
                        !loading && <Link to="/make-an-order">
                                        <CustomerButton textButton="Siguiente" color="secondary"/>
                                    </Link>
                    }
                </Box>
            </Box>
        </React.Fragment>
    );
};

export {ReserveTable};