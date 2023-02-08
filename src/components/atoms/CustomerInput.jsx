import React from 'react';
import {FormControl, InputAdornment, OutlinedInput} from "@mui/material";

const CustomerInput = ({textHolder, icon, typeText, width}) => {
    return (
        <FormControl  sx={{width: '100%',mb:1}}>
            <OutlinedInput
                sx={{background: '#efefefef', width: width}}
                placeholder={textHolder}
                type={typeText}
                startAdornment={
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export {CustomerInput};

