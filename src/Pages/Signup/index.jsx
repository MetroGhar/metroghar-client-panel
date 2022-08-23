import React, { useState, useEffect } from "react";
import { Box, Typography} from "@mui/material"
import Img from "../../assets/images/loginPage.jpg"
import Logo from "../../assets/images/logo.png"
import { StyledInput, StyledLabel, PrimaryButton, StyledLink} from "../../Components/Utilities/StyledComponents";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
  
    const reset = () => {
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors([]);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      
    }

    
    return(
        <Box sx={{display: 'flex',justifyContent: "stretch",width: "100vw",height: "100vh"}}>
            <Box sx={{width: "50vw"}}>
                <img src={Img} alt="img" style={{width: "50vw",height: "100vh"}} />
            </Box>
            <Box sx={{width: "50vw"}}>
                <Box sx={{mt: 3,display: 'flex',justifyContent: "center"}}>
                    <img src={Logo} alt="logo" />
                </Box>
                <Box sx={{mt: "40px"}}>
                    {errors.length > 0 && (
                        <ul>
                        {errors.map((err, index) => {
                            return (
                            <li key={index}>
                                {err}
                            </li>
                            );
                        })}
                        </ul>
                    )}
                    <form style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
                        <div>
                            <StyledLabel htmlFor="name">Name<span style={{color: "red"}}>*</span></StyledLabel>
                            <StyledInput id="name"  onChange={e=> setDisplayName(e.target.value)} />  
                        </div>
                        <div>
                            <StyledLabel htmlFor="email">Email<span style={{color: "red"}}>*</span></StyledLabel>
                            <StyledInput id="email"  onChange={e=> setEmail(e.target.value)} />  
                        </div>
                        <div>
                            <StyledLabel htmlFor="password">Password<span style={{color: "red"}}>*</span></StyledLabel>
                            <StyledInput type="password" id="password"  onChange={e=> setPassword(e.target.value)} /> 
                        </div>      
                        <div>
                            <StyledLabel htmlFor="password">Confirm Password<span style={{color: "red"}}>*</span></StyledLabel>
                            <StyledInput type="password" id="confirmPassword"  onChange={e=> setConfirmPassword(e.target.value)} /> 
                        </div>                   
                        <PrimaryButton sx={{mt: 4 }} variant="contained" onClick={handleSubmit}>Register</PrimaryButton>
                    </form>
                    <Typography sx={{textAlign: "center"}}>Already have an account? <StyledLink to="/login">Login</StyledLink></Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Signup;