import { Box } from '@mui/material';
import React from 'react'
import Card4 from './Card4';
import { CardWrapper, HeadTypo } from './styles';
import Carousel from "react-elastic-carousel"
import Delhi from "../../../assets/images/delhi.png"
import Bangalore from "../../../assets/images/bangalore.png"
import Surat from "../../../assets/images/surat.png"
import Chennai from "../../../assets/images/chennai.png"
import Kolkata from "../../../assets/images/kolkata.png"


const Cities = () => {
    return(
        <Box>
            <HeadTypo>Explore Real Estate By City </HeadTypo>
            <Carousel itemsToShow={5} pagination={false}>
                <Card4 city="Bangalore" imgUrl={Bangalore} />
                <Card4 city="Delhi" imgUrl={Delhi}  />                
                <Card4 city="Surat" imgUrl={Surat} />
                <Card4 city="Chennai" imgUrl={Chennai} />
                <Card4 city="Kolkata" imgUrl={Kolkata} />
            </Carousel>
        </Box>
    )
}

export default Cities;
