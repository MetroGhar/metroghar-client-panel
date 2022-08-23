import { Box, Button, styled } from '@mui/material';
import React from 'react';
import Card1 from './Card1';
import { HeadTypo } from './styles';
import Carousel,{consts} from "react-elastic-carousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledArrowR = styled(Button)({
    minWidth: "28px",
    height: "52px",
    background: "#fff",
    border: "1px solid #e5e5e5", 
    position: "absolute",
    right: "0px",
    top: "40px",
    ':hover': {
        background: "#FEAA7B"
    },
    ':focused': {
        background: "#FEAA7B"
    },
    ':disabled': {
        visibility: "hidden"
    }
})
const StyledArrowL = styled(Button)({
    minWidth: "28px",
    height: "52px",
    background: "#fff",
    border: "1px solid #e5e5e5",
    zIndex: 10,
    position: "absolute",
    left: "4px",
    top: "40px",
    ':hover': {
        background: "#FEAA7B"
    },
    ':focused': {
        background: "#FEAA7B"
    },
    ':disabled': {
        visibility: "hidden"
    }
})

const Localities = () => {
    function myArrow({ type, onClick, isEdge }) {       
        return type === consts.PREV ?  (
          <StyledArrowL onClick={onClick} disabled={isEdge} >
            <ArrowBackIosIcon sx={{color: '#000',fontSize: "14px"}} />
          </StyledArrowL>
        ) :
        (
          <StyledArrowR onClick={onClick} disabled={isEdge} >
            <ArrowForwardIosIcon sx={{color: '#000',fontSize: "14px"}} />
          </StyledArrowR>
        )
      }
    return(
        <Box>
            <HeadTypo>Localities You May Like</HeadTypo>
            <Carousel renderArrow={myArrow} style={{position: "relative"}}  itemsToShow={4} pagination={false}>
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
            </Carousel>
            
        </Box>
    )
}

export default Localities;