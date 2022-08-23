import { Box } from '@mui/material';
import React from 'react'
import Card from './Card';
import { CardWrapper, HeadTypo } from './styles';
import Carousel from "react-elastic-carousel"


const Trending = ({head}) => {
    return(
        <Box>
            <HeadTypo>{head}</HeadTypo>
            <Carousel itemsToShow={4} pagination={false}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
        </Box>
    )
}

export default Trending;
