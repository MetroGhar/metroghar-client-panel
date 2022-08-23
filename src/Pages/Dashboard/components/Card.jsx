import React from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { 
    Paper,
    styled,
    Box,
    Typography,
    Grid,
    Button
} from "@mui/material";
import KLC from "../../../Components/Utilities/KLC";
import theme from "../../../styles/theme";
import Contact from "../../../assets/images/contactIcon.png"
import Choice from "../../../assets/images/choiceIcon.png"
import RecentlyView from "../../../assets/images/recentlyViewed.png"
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledPaper = styled(Paper)({
    width: "800px",
    height: "250px",
    borderRadius: "10px",
    border: "1.5px solid #e5e5e5",
    display: "flex",
    margin: "10px 0"
})

const ContentBox = styled(Box)({
    padding: "25px",
    width: "50%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
})

const HeadTypography = styled(Typography)({
    fontSize: "20px",
    lineHeight: "23px",
    fontWeight: "400",
})

const AddressTypo = styled(Typography)({
    fontSize: "12px",
    fontWeight: "300",
    lineHeight: "14px",
})

const GridTypo = styled(Typography)({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
})

const StyledButton = styled(Button)({
    textTransform: "none",
    "&:hover": {
        color: "#FFF",
        background: theme.palette.primary.light,
    }
})



const Card = ({data,recent}) => {
    // console.log(data)
    const capitalize = (str) =>{ return str.charAt(0).toUpperCase() + str.slice(1)}
    return(
        <StyledPaper elevation={0} >
            <Box sx={{width: "50%"}}>
                <img src={data.mainImageUrls.length> 0 && data.mainImageUrls[0]} alt="propertyImage" width="400px"  height="100%" style={{borderRadius: '10px 0 0 10px'}} />
            </Box>
            <ContentBox>
                <Grid container>
                    <Grid item xs={10}>
                        <HeadTypography>{data.propertyName}</HeadTypography>
                        <AddressTypo ><LocationOnOutlinedIcon sx={{fontSize: "12px"}} />{data.ownerAddress}</AddressTypo>
                    </Grid>
                    <Grid item xs={2}>
                        {
                            recent === "viewed" ?
                            <img src={RecentlyView} alt="viewd" width={60}  height={44} style={{position: "relative",top: "-18px",right: "-28px"}} /> : 
                            recent === "contact" ? 
                            <img src={Contact} alt="viewd" width={60} height={44} style={{position: "relative",top: "-21px",right: "-20px"}} /> :
                            recent === "recommend" ? 
                            <img src={Choice} alt="viewd" width={60} height={44} style={{position: "relative",top: "-18px",right: "-25px"}} /> : 
                            recent === "shortlisted" ?
                            <FavoriteIcon sx={{color: "red",fontSize: "40px",position: "relative",top: "-20px",right: "-35px"}}  /> : ""
                        }
                        
                    </Grid>
                </Grid>
               <Grid container rowSpacing={2}>
                    <Grid item xs={6}><GridTypo>Position: {data.position}</GridTypo></Grid>
                    <Grid item xs={6}><GridTypo>Space: {(data.minspace)} - {data.maxspace} sqft</GridTypo></Grid>
                    <Grid item xs={6}><GridTypo>Residential: {capitalize(data.type)}</GridTypo></Grid>
                    <Grid item xs={6}><GridTypo>Type: {data ? data.configuration.length && data.configuration.map((val,i,arr)=>{return i===arr.length-1 ?  <span>{val.label}</span> : <span>{val.label}, </span>}) : ""}</GridTypo></Grid>
                </Grid>
                <Box sx={{display: "flex",justifyContent: "space-around",alignItems: "center"}}>
                    <HeadTypography>Rs {KLC(data.minPriceAmount)} - {KLC(data.maxPriceAmount)}</HeadTypography>                  
                </Box>
            </ContentBox>
        </StyledPaper>
    )
}

export default Card;