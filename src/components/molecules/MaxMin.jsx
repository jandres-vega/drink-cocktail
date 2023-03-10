import React from 'react';
import { Box, ButtonGroup,IconButton, Typography} from "@mui/material";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const MaxMin = ({cont, setCont}) => {
    const handleIncrement = () => {
        setCont(cont+=1);
    }
    const handleDecrement = () => {
        setCont(cont-=1)
    }


    return (
        <React.Fragment>
            <ButtonGroup sx={{position: "relative", botton: 30}}>
                <IconButton onClick={handleDecrement} disabled={cont === 1 ? true:false}>
                    <RemoveCircleIcon sx={{mr:1}} />
                </IconButton>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography
                        fontSize="large"
                        variant="span"
                        sx={{position: 'relative',top: 5, color: '#000000'}}>{cont}
                    </Typography>
                </Box>
                <IconButton onClick={handleIncrement} >
                    <AddCircleIcon  sx={{ml:1}} />
                </IconButton>
            </ButtonGroup>
        </React.Fragment>
    );
};

export {MaxMin};