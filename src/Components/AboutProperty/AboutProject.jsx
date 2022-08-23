import React from "react";
import {
    Paper,
    Divider,
    Box,
    Typography,
    Grid,
    styled
} from "@mui/material";
import KLC from "../Utilities/KLC";

const GridHeadTypo = styled(Typography)({
    fontSize: "25px",
    fontWeight: "400",
    lineHeight: "29px",
    color: "rgba(0, 0, 0, 0.56)"
})

const GridDataTypo = styled(Typography)({
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "24px"
})

const GridItem = styled(Grid)({
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "24px",
    display:"flex",
    flexDirection: "column",
    alignItems: "center"
})
const AboutProject = ({data}) => {
    // console.log(data)

    // console.log(document.html(data.aboutProject))

    // document.getElementById("about-proj").textContent = data.aboutProject

//     const d =  <span
// //     className="desc"
// // dangerouslySetInnerHTML={{ __html: productDesc }} />
    return data ? (

        <Box mb={5} >
            <Paper sx={{padding: "20px 15px",border: "1px solid #e5e5e5"}} elevation={3}>
                <Typography sx={{fontSize: "22px"}} >About {data.projectname}</Typography>
                <Divider sx={{my: 2}} />
                <Typography id="about-proj"><span dangerouslySetInnerHTML={{ __html: data.aboutproject }} /></Typography>
            </Paper>
            <Paper sx={{padding: "20px 15px",border: "1px solid #e5e5e5",my: 4}} elevation={3}>
                <Typography sx={{fontSize: "22px"}}>Property Overview</Typography>
                <Divider sx={{my: 2,}} />
                <Grid container rowSpacing={4}>
                    <GridItem item xs={4}>
                        <GridHeadTypo>Sizes</GridHeadTypo>
                        <GridDataTypo>{data.projectminspace} - {data.projectmaxspace} sqft</GridDataTypo>
                    </GridItem>
                    <GridItem item xs={4}>
                        <GridHeadTypo>Price</GridHeadTypo>
                        <GridDataTypo>Rs {data ? `${KLC(data.projectminspace)}-${KLC(data.projectmaxprice)}` : ""}</GridDataTypo>
                    </GridItem>
                    <GridItem item xs={4}>
                        <GridHeadTypo>Towers & Units</GridHeadTypo>
                        <GridDataTypo>{data.projecttowerunit}</GridDataTypo>
                    </GridItem>
                    <GridItem item xs={4}>
                        <GridHeadTypo>Status</GridHeadTypo>
                        <GridDataTypo>{data.projectpossessionstatus}</GridDataTypo>
                    </GridItem>
                    <GridItem item xs={4}>
                        <GridHeadTypo>Configurations</GridHeadTypo>
                        <GridDataTypo sx={{fontSize: "14px"}}>{data ? data.projectconfiguration : ""} Apartments</GridDataTypo>
                    </GridItem>
                    <GridItem item xs={4}>
                        <GridHeadTypo>Rera Id</GridHeadTypo>
                        <GridDataTypo sx={{fontSize: "14px"}}>{data.projectreranumber}</GridDataTypo>
                    </GridItem>
                </Grid>
            </Paper>
            {
                data.projectspecification &&
                <Paper sx={{padding: "20px 15px",border: "1px solid #e5e5e5"}} elevation={3}>
                    <Typography sx={{fontSize: "22px"}}>Specifications</Typography>
                    <Divider sx={{my: 2}} />
                    <Typography><span dangerouslySetInnerHTML={{ __html: data.projectspecification }} /></Typography>
                </Paper>
            }
            
        </Box>
    ) : ""
}

export default AboutProject;