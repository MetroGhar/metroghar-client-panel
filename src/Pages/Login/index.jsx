import React, { useState } from "react";
import { Box, Typography} from "@mui/material"
import Img from "../../assets/images/loginPage.jpg"
import Logo from "../../assets/images/logo.png"
import { StyledInput, StyledLabel, PrimaryButton, StyledLink} from "../../Components/Utilities/StyledComponents";

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    // e.preventDefault();
    console.log(email,password)
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
                <Box sx={{mt: "80px"}} >
                    <form style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
                        <div>
                            <StyledLabel htmlFor="mail">Email<span style={{color: "red"}}>*</span></StyledLabel>
                            <StyledInput id="mail" name="mail"  onChange={e=> setEmail(e.target.value)} />  
                        </div>
                        <div>
                            <StyledLabel htmlFor="password">Password<span style={{color: "red"}}>*</span></StyledLabel>
                            <StyledInput type="password" name="password" id="password"  onChange={e=> setPassword(e.target.value)} /> 
                        </div>                        
                        <PrimaryButton sx={{mt: 5 }} variant="contained" onClick={handleSubmit}>Login</PrimaryButton>
                    </form>
                    <Typography sx={{textAlign: "center"}}>Don't have an account? <StyledLink to="/signup">Signup</StyledLink></Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Login;