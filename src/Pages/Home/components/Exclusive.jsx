import { Box, Typography, Button, Paper, styled} from '@mui/material';
import React from 'react';
import { CardTypo1, HeadTypo } from './styles'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Property from "../../../assets/images/property.png"
import Carousel,{consts} from "react-elastic-carousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledArrowR = styled(Button)({
    minWidth: "42px",
    height: "80px",
    background: "#fff",
    border: "1px solid #e5e5e5",
    position: "absolute",
    right: "4px",
    top: "200px",
    zIndex: 10,
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
    minWidth: "42px",
    height: "80px",
    background: "#fff",
    border: "1px solid #e5e5e5",
    zIndex: 10,
    position: "absolute",
    left: "4px",
    top: "200px",
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

const Exclusive = () =>{
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
        <Box sx={{position: "relative" , marginBottom: "110px"}}>
             <HeadTypo>Exclusive Projects</HeadTypo>
            <Carousel renderArrow={myArrow} style={{position: "relative"}} itemsToShow={1} pagination={false}>
               <img src={Property} alt="img" width={1255} height={556} />
               <img src={Property} alt="img" width={1255} height={556} />
            </Carousel>
            <Paper sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: 'center',
                width: "1150px",
                height: "108px",
                zIndex: "5",
                position: "absolute",
                bottom: "-54px",
                left: "6%"
            }}>
                <Box>
                    <Typography sx={{fontWeight: "600"}}>VBHC Hillview</Typography>
                    <CardTypo1><LocationOnOutlinedIcon sx={{fontSize: "12px"}} /> Thanisandra Main Road, Bangalore</CardTypo1>
                    <Typography>₹ 18.22 L - 28.75 L</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontWeight: "600"}} textAlign={"center"}>Configurations</Typography>
                    <Typography >1, 2 BHK Apartments</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontWeight: "600"}} textAlign={"center"}>Possession Status</Typography>
                    <Typography textAlign={"center"}>Ready to Move</Typography>
                </Box>
                <Button sx={{textTransform: "none"}} variant="contained">View More</Button>
            </Paper>
        </Box>
    )
}

export default Exclusive;