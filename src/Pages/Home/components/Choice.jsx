import { Box, Grid } from '@mui/material';
import React from 'react';
import Card1 from './Card1';
import { HeadTypo } from './styles';
import Carousel from "react-elastic-carousel"
import Card3 from './Card3';
import Apartment from "../../../assets/images/apartments.png";
import Villa from "../../../assets/images/villa.png";
import Ploat from "../../../assets/images/residentialPloat.png";
import Serviced from "../../../assets/images/servicedApartment.png";
import FarmHouse from "../../../assets/images/farmHouse.png";

const Choice = () => {
    return(
        <Box>
            <HeadTypo>Explore Your Dream House By Your Choice </HeadTypo>
            <Grid container columnSpacing={2} rowSpacing={2} px={2}>
                <Grid item xs={4}><Card3 backUrl={Apartment} text="Apartments"  /></Grid>
                <Grid item xs={4}><Card3 backUrl={Villa} text="Villa" /></Grid>
                <Grid item xs={4}><Card3 backUrl={Ploat} text="Residential Ploat" /></Grid>
                <Grid item xs={6}><Card3 backUrl={Serviced} text="Serviced Apartments" /></Grid>
                <Grid item xs={6}><Card3 backUrl={FarmHouse} text="Farm House" /></Grid>
            </Grid>
            
        </Box>
    )
}

export default Choice;