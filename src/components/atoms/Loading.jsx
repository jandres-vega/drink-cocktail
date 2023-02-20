import React from 'react';
import {
    Box, LinearProgress,
} from "@mui/material";
const Loading = () => {
    return (
        <Box sx={{ width: '80%', mt:2 }}>
            <LinearProgress />
        </Box>
    );
};

export {Loading};