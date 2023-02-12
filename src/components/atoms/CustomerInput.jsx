import React from 'react';
import {FormControl, FormHelperText, InputAdornment, OutlinedInput} from "@mui/material";

const CustomerInput = ({textHolder, icon, typeText, width, name, getValueInput, error}) => {

    const handleOnChange = (e) => {
        getValueInput(e.target.value, e.target.name)
    }

    return (
        <FormControl  sx={{width: '100%',mb:1}}>
            <OutlinedInput
                error={error}
                sx={{background: '#efefefef', width: width}}
                placeholder={textHolder}
                name={name}
                type={typeText}
                onChange={handleOnChange}
                startAdornment={
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                }
            />
            {
                error && (<FormHelperText error id="outlined-weight-helper-text">{error}</FormHelperText>)
            }
        </FormControl>
    );
};

export {CustomerInput};

