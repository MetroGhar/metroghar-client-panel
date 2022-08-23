import React from 'react'
import {
    Grid,
} from "@mui/material"
import { StyledInput, StyledLabel1, PrimaryButton } from "../../../Components/Utilities/StyledComponents"
import { GridItem, Wrapper } from './styles'

const EditPassword = () => {
     return(
        <Wrapper>
            <Grid container>
                <GridItem item xs={6}  >
                    <StyledLabel1 htmlFor='name'>Old Password</StyledLabel1>
                    <StyledInput id='name' name='name' type='text' />
                </GridItem>
                <GridItem item xs={6} >
                    <StyledLabel1 htmlFor='email'>New Password</StyledLabel1>
                    <StyledInput id='email' name='email' type='mail' />
                </GridItem>
                <GridItem item xs={6} my={4}>
                    <StyledLabel1 htmlFor='number'>Confirm Password</StyledLabel1>
                    <StyledInput id='number' name='number' type='number' />
                </GridItem>
                <Grid item xs={12} sx={{display: "flex",justifyContent: "center"}} my={5}>
                    <PrimaryButton>Submit</PrimaryButton>
                </Grid>
            </Grid>
        </Wrapper>
     )
}

export default EditPassword;