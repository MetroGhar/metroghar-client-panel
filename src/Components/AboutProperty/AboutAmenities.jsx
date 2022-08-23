import React from "react";
import {
    Paper,
    Divider,
    Box,
    Typography,
    styled
} from "@mui/material";
// import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import carWash from '../../assets/images/carWash.png'
// import gym from '../../assets/images/icons8-gym.png'
import cricket from '../../assets/images/icons8-cricket.png'
import cctv from '../../assets/images/icons8-cctv.png'
import rainWater from '../../assets/images/icons8-rainwater-catchment.png'


const StyledTypo = styled(Typography)({
    fontSize: "10px",
    fontWeight: "12px"
})

const AboutAmenities = ({data, expand}) => {
    // console.log(data)
    return data  ? (
        <Box mb={5} sx={{display: expand ? "block" : "none"}}>
            <Paper sx={{padding: "30px 15px",border: "1px solid #e5e5e5"}} elevation={3}>
                <Typography sx={{mb: 2,fontSize: "21px"}}>Basic Amentities</Typography>
                <Box sx={{display: 'flex',gridColumnGap: "20px"}}>
                    {
                        data.basicamenities.map((val,i)=>{
                            return(
                            <Box key={i} sx={{display: 'flex',flexDirection:'column', alignItems: 'center'}}>
                                {/* <HealthAndSafetyOutlinedIcon sx={{fontSize: "34px",color: "#1ADDFF"}} /> */}
                                <img src={carWash} alt="amenities"  height="40" />
                                <StyledTypo>{val}</StyledTypo>
                            </Box>
                            )
                        })
                    }
                </Box>
                <Divider sx={{my: 2}} />
                <Typography sx={{mb: 2,fontSize: "21px"}}>Environment Amentities</Typography>
                <Box sx={{display: 'flex',gridColumnGap: "20px"}}>
                {
                        data.environmentamenities.map((val,i)=>{
                            return(
                            <Box key={i} sx={{display: 'flex',flexDirection:'column', alignItems: 'center'}}>
                                {/* <HealthAndSafetyOutlinedIcon sx={{fontSize: "34px",color: "#1ADDFF"}} /> */}
                                <img src={rainWater} alt="amenities"  height="40" />
                                <StyledTypo>{val}</StyledTypo>
                            </Box>
                            )
                        })
                    }
                </Box>
                <Divider sx={{my: 2}} />
                <Typography sx={{mb: 2,fontSize: "21px"}}>Security Amentities</Typography>
                <Box sx={{display: 'flex',gridColumnGap: "20px"}}>
                {
                    data.securityamenities.map((val,i)=>{
                        return(
                        <Box key={i} sx={{display: 'flex',flexDirection:'column', alignItems: 'center'}}>
                            {/* <HealthAndSafetyOutlinedIcon sx={{fontSize: "34px",color: "#1ADDFF"}} /> */}
                            <img src={cctv} alt="amenities" height="40" />
                            <StyledTypo>{val}</StyledTypo>
                        </Box>
                        )
                    })
                }
                </Box>
                <Divider sx={{my: 2}} />
                <Typography  sx={{mb: 2,fontSize: "21px"}}>Sports Amentities</Typography>
                <Box sx={{display: 'flex',gridColumnGap: "20px"}}>
                {
                    data.sportsamenities.map((val,i)=>{
                        return(
                        <Box key={i} sx={{display: 'flex',flexDirection:'column', alignItems: 'center'}}>
                            {/* <HealthAndSafetyOutlinedIcon sx={{fontSize: "34px",color: "#1ADDFF"}} /> */}
                            <img src={cricket} alt="amenities"  height="40" />
                            <StyledTypo>{val}</StyledTypo>
                        </Box>
                        )
                    })
                }
                </Box>
            </Paper>
           
        </Box>
    ) : <></>
}

export default AboutAmenities;