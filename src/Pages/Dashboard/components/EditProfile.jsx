import React, { useEffect, useState } from 'react'
import {
    Box,
    Divider,
    Grid,
    InputBase
} from "@mui/material"
import { StyledInput, StyledLabel1, PrimaryButton } from "../../../Components/Utilities/StyledComponents"
import { GridContainer, GridItem, Wrapper, ImageUploadBox } from './styles'
import User from "../../../assets/images/cpProfile.png"

const EditProfile = () => {
    const [user,setUser] = useState(null);
    useEffect(()=>{
    let us = window.localStorage.getItem('User_Data');
    setUser(JSON.parse(us));

    },[])
     return(
        <Wrapper>
            <Grid container>
                <GridItem item xs={6}  >
                    <StyledLabel1 htmlFor='name'>Name</StyledLabel1>
                    <StyledInput id='name' name='name' type='text' value={user && user.name} />
                </GridItem>
                <GridItem item xs={6} >
                    <StyledLabel1 htmlFor='email'>Email id</StyledLabel1>
                    <StyledInput id='email' name='email' type='mail' value={user && user.email} />
                </GridItem>
                <GridItem item xs={6} my={4}>
                    <StyledLabel1 htmlFor='number'>Mobile No.</StyledLabel1>
                    <StyledInput id='number' name='number' type='number' value={user && user.mobile} />
                </GridItem>
                <GridItem item xs={6} my={4}>
                    <StyledLabel1 htmlFor='number'>Profile Image</StyledLabel1>
                    <ImageUploadBox>
                        <Box><img src={User} alt="profile" /></Box>                        
                        <Divider orientation='vertical' flexItem />
                        <Box sx={{width: "60%"}}><InputBase sx={{fontSize: "14px",mt: 1}} id='number' name='number' type='file' /></Box>                        
                    </ImageUploadBox>                    
                </GridItem>
                <Grid item xs={12} sx={{display: "flex",justifyContent: "center"}} my={5}>
                    <PrimaryButton>Submit</PrimaryButton>
                </Grid>
            </Grid>
        </Wrapper>
     )
}

export default EditProfile;