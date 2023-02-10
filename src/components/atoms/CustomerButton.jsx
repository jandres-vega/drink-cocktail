import React from 'react';
import {Button} from "@mui/material";
const CustomerButton = ({textButton,width, color, dispatch}) => {
    return (
        <Button
            onClick={dispatch}
            color={color}
            sx={{
                zIndex: 1,
                width: width,
        }} variant="contained">{textButton}
        </Button>
    );
};

export {CustomerButton};