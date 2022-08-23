import React from "react";
import {
    Paper,
    Divider,
    Box,
    Typography,
    styled
} from "@mui/material";
// import Builder from "../../assets/images/builderProfile.png"
import CP from "../../assets/images/cpProfile.png"
import verified from "../../assets/images/verified.png"

const ProfileWrapper = styled(Box)({
    border: "1px solid #1ADDFF",
    borderRadius: "50%",
    width: "136px",
    height: "136px",
    background: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})


const AboutBuilder = ({data, expand}) => {
    // console.log(data)
    return data ?(
        <Box mb={5} sx={{display: expand ? "block" : "none"}}>
            {
                data ?
            <Paper sx={{padding: "30px 15px",border: "1px solid #e5e5e5",borderRadius: "15px",mb: 5}} elevation={3}>
                <Box sx={{px: "15px",display: "flex",gridColumnGap: "60px"}}>
                    <ProfileWrapper>
                        <img src={data.builderimage.secure_url} alt="builder" width="98px" />
                    </ProfileWrapper>
                    <Box sx={{display: "flex",justifyContent: 'space-between',flexDirection: "column"}}>
                        <Typography sx={{fontSize: "24px"}}>{data.buildername}</Typography>
                        <Box sx={{display: "flex",gridColumnGap: "20px"}}>
                            <Typography align="center">
                                Year Estab. <br/>{data.builderyoe}
                            </Typography>
                            <Typography align="center">
                                Project <br/> {data.builderproject}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{my: 3}} />
                <Typography><span dangerouslySetInnerHTML={{ __html: data.builderdescription }} /></Typography>
            </Paper>
            :
            <Paper sx={{padding: "30px 15px",border: "1px solid #e5e5e5",borderRadius: "15px",position: "relative"}} elevation={3}>
                <Box sx={{position: "absolute",right: "0",top: "0"}}>
                    <img src={verified} alt="trusted user" />
                </Box>                
                <Box sx={{px: "15px",display: "flex",gridColumnGap: "60px",mb: 4}}>
                    <ProfileWrapper>
                        <img src={CP} alt="builder" width="98px" />
                    </ProfileWrapper>
                    <Box sx={{display: "flex",justifyContent: 'space-between',flexDirection: "column"}}>
                        <Typography sx={{fontSize: "24px"}}>{data.buildername}</Typography>
                        <Box sx={{display: "flex",gridColumnGap: "20px"}}>
                            <Typography align="center">
                                Experience <br/>{data.builderproject}
                            </Typography>
                            <Typography align="center">
                                Properties <br/> {data.builderproject}
                            </Typography>
                        </Box>
                    </Box>
                </Box>                
                <Typography sx={{color: "#58595B",display: "inline",fontSize: "21px"}}>Location: </Typography>
                <Typography sx={{color: "#58595B",display: "inline",}}>{data.builderlocality}</Typography>
            </Paper> 
            }
        </Box>
    ) : ""
}

export default AboutBuilder;