import { Box, Typography } from '@mui/material';
import React from 'react';
import Property from "../../../assets/images/property.png"
import { Card3Typo } from './styles';

const Card3 = ({text,backUrl}) => {
    const style = {
        background: `url(${backUrl})`,
        width: "100%",
        height: text === "Serviced Apartments" || text === "Farm House" ? "300px" : "400px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
    }
    return(
        <Box sx={style}>
            <Card3Typo>{text}</Card3Typo>
        </Box>
    )
}

export default Card3;