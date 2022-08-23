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
import KLC from "../Utilities/KLC";
import theme from "../../styles/theme";

const StyledPaper = styled(Paper)({
    width: "800px",
    height: "250px",
    borderRadius: "10px",
    border: "1.5px solid #e5e5e5",
    display: "flex",
    
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



const PropertyCard = ({data}) => {
    // console.log(data)
    const capitalize = (str) =>{ return str.charAt(0).toUpperCase() + str.slice(1)}
    const {
        externalimages,
        projectname,
        projecttype,
        builderlocality,
        projectconfiguration,
        projectpossessionstatus,
        projectminprice,
        projectmaxprice,
        projectminspace,
        projectmaxspace,
        _id
    } = data;
    return(
        <StyledPaper elevation={0}>
            <Box sx={{width: "50%"}}>
                <img src={externalimages && externalimages.length>0 && externalimages[0].secure_url} alt="propertyImage" width="400px"  height="100%" style={{borderRadius: '10px 0 0 10px'}} />
            </Box>
            <ContentBox>
                <Box>
                    <HeadTypography>{projectname}</HeadTypography>
                    <AddressTypo ><LocationOnOutlinedIcon sx={{fontSize: "12px"}} />{builderlocality}</AddressTypo>
                </Box>
               <Grid container rowSpacing={2}>
                    <Grid item xs={6}><GridTypo>Possession Status: {projectpossessionstatus}</GridTypo></Grid>
                    <Grid item xs={6}><GridTypo>Space: {projectminspace} - {projectmaxspace} sqft</GridTypo></Grid>
                    <Grid item xs={6}><GridTypo>Property Type: {projecttype}</GridTypo></Grid>
                    <Grid item xs={6}><GridTypo>Configuration: {projectconfiguration}</GridTypo></Grid>
                </Grid>
                <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                    <HeadTypography>Rs {KLC(projectminprice)} - {KLC(projectmaxprice)}</HeadTypography>
                    <StyledButton  href={`#/property/${_id}`}  variant="contained" >Explore More</StyledButton>                    
                </Box>
            </ContentBox>
        </StyledPaper>
    )
}

export default PropertyCard;