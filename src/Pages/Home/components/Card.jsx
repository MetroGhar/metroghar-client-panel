import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Property from "../../../assets/images/property.png"
import { CardTypo1, CardTypo2, CardWrapper, StyledButton } from './styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Card = () => {
    return(
        <CardWrapper>
            <img src={Property} alt="property" width="292" height="200" style={{borderRadius: "15px 15px 0 0"}}  />
            <Grid container p={1}>
                <Grid item xs={12}><Typography>Media Greens</Typography></Grid>
                <Grid item xs={12}><CardTypo1><LocationOnOutlinedIcon sx={{fontSize: "12px"}} /> Thanisandra Main Road, Bangalore</CardTypo1></Grid>  
                <Grid item xs={6} my={2}><CardTypo2>Residential</CardTypo2></Grid>              
                <Grid item xs={6} my={2}><CardTypo2>Under Construction</CardTypo2></Grid>          
                <Grid item xs={6} mt={1}><CardTypo2 sx={{lineHeight: "25px"}}>&#x20B9; 81.9 L - &#x20B9; 1.09 Cr</CardTypo2></Grid> 
                <Grid item xs={2}></Grid>         
                <Grid item xs={4} mt={1}><StyledButton variant='contained'>View More</StyledButton></Grid>          
            </Grid>
        </CardWrapper>
    )
}

export default Card;