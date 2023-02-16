import React from 'react';
import {Alert} from "@mui/material";

const AlertMessage = ({error, warning, success}) => {

    if (error){
        return (
            <Alert severity="error">{error}</Alert>
        )
    }else if(warning){
        return (
            <Alert severity="warning">{warning}</Alert>
        )
    }else {
        return (
            <Alert severity="success" >{success}
                <strong> check it out!</strong>
            </Alert>
        )
    }

};

export {AlertMessage};