import React from 'react';
import {Button} from "@mui/material";
const CustomerButton = ({textButton,width, color}) => {
    return (
        <Button
            color={color}
            sx={{
                zIndex: 1,
                width: width,
        }} variant="contained">{textButton}</Button>
    );
};

export {CustomerButton};