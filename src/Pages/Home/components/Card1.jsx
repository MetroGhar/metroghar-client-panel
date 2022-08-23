import React from 'react';
import { Box, Typography } from "@mui/material"
import Property from "../../../assets/images/property.png"
import { Card1Button, Card1Wrapper, CardTypo1, CardTypo2, CardTypo3, CardTypo4 } from './styles';
import StarIcon from '@mui/icons-material/Star';

const logo = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
}

const Card1 = () => {
    return(
        <Card1Wrapper>
            <Box sx={{display: "flex",justifyContent: "space-around",mt: 1}}>
                <img src={Property} alt="property" style={logo} />
                <Box sx={{alignSelf: "center"}}>
                    <CardTypo2>Whitefield, Bangalore</CardTypo2>
                    <CardTypo1 sx={{textAlign: "center",mt: 1}}>₹4,200- ₹7,300 / sqft</CardTypo1>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <CardTypo2 sx={{lineHeight: "16px"}}>4.8 </CardTypo2><StarIcon sx={{color: "#FDCC0D",fontSize: "16px",}} />
                </Box>                
            </Box>
            <Box sx={{display: "flex",justifyContent: "space-around"}}>
                <Box>
                    <CardTypo3>Ready To Move</CardTypo3>
                    <CardTypo4>30,000+ Properties</CardTypo4>
                </Box>
                <Box>
                    <CardTypo3>New Launch</CardTypo3>
                    <CardTypo4>300+ Properties</CardTypo4>
                </Box>
                <Box>
                    <CardTypo3>Upcoming Project</CardTypo3>
                    <CardTypo4>200+ Properties</CardTypo4>
                </Box>
            </Box>
            <Card1Button variant='contained'>Explore More</Card1Button>
        </Card1Wrapper>        
    )
}

export default Card1;
