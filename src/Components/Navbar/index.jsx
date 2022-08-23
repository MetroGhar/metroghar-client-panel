import React, { useCallback, useEffect, useState } from 'react'
import {
    AppBar,
    Button,
    Box,
    Toolbar,
    Menu,
    MenuItem,
    styled,
    InputBase,
    Divider,
    Paper,
    Typography,
    Grid,
    Modal,

} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from "../../assets/images/logoT.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Axios from 'axios';

const StyledButton = styled(Button)({
    color: "#000",
    textTransform: "none",
    ':hover': {
        background: "none"
    } 
})

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '0px solid #e5e5e5',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

const SearchBox = styled(Paper)({
    display: 'flex',
    height: 44,
    width: "35vw",
    position: "relative",
    border: "1px solid #E5E5E5",
    borderRadius: "5px"
})

const LocationButton = styled(Button)({
    bgcolor: "#fff",
    color: "#000",
    fontSize: "16px",
    width: "115px",
    textTransform: 'none',
    ':hover': {bgcolor: "#fff"}
})

const StyledMenuItem = styled(MenuItem)({
    width: 123,
})

  
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [display,setDisplay] = useState(true)
    const [position,setPosition] = useState("absolute");
    const [loginModal,setLoginModal] = useState(false);
    const [signupModal,setSignupModal] = useState(false);
    const open = Boolean(anchorEl);
    const handleLoginModalOpen = () => setLoginModal(true);
    const handleSignupModalOpen = () => setSignupModal(true);
    const handleLoginModalClose = () => setLoginModal(false);
    const handleSignupModalClose = () => setSignupModal(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const location = useLocation()
    const navigate = useNavigate()
    const [registerBody,setRegisterBody] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    })
    const [loginBody,setLoginBody] = useState({
        email: '',
        password: ''
    })
    const [user,setUser] = useState();
    const sd = window.sessionStorage.getItem('filter Values');
    const searchData = JSON.parse(sd);
    useEffect(()=>{
        // console.log(location)
        let path = location.pathname;
        if(path==="/login" || path==="/signup")
            setDisplay(false)
        else
            setDisplay(true)
        if(path==="/login" || path==="/signup" || path==="/"  ) //|| path==="/search"
            setPosition("absolute")
        else
            setPosition("relative")

            const filterValuesData = window.sessionStorage.getItem("filter Values")
            setPrevFilter(JSON.parse(filterValuesData))
    },[location])

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signout = () => {
        // dispatch(signOutUserStart());
        window.localStorage.clear();
        window.location.reload();
        navigate('/')

    }

    const [locality,setLocality] = useState('');
    const [locaton,setLocation] = useState(searchData && searchData.location);
    const [search,setSearch] = useState(searchData && searchData.search);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [prevFilter,setPrevFilter] = useState();
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleClose1 = (e) => {
        setLocation(e.target.innerText.toLowerCase());
        setAnchorEl1(null);
        window.sessionStorage.setItem("filter Values",JSON.stringify({
            location: locaton,
            locality: '',
            minPrice: 0,
            maxPrice: 100000000,            
            price: [0,100000000],
            propertyType: '',
            spaceType: '',
            postedBy: '',
            status: '',
            minArea: 200,
            maxArea: 5000,
            area: [200,5000],
            raraProperty: '',
            raraNumber: '',
            search: search
        }))
    };

    // useEffect(()=>{
    //     window.sessionStorage.setItem("filter Values",JSON.stringify({
    //         location: locaton,
    //         search: locality,
    //         page: 1,
    //         sort: true,
    //         locality: '',            
    //         price: [0,1000000000],
    //         propertyType: '',
    //         spaceType: '',
    //         postedBy: '',
    //         status: '',
    //         area: [200,5000],
    //         raraProperty: '',
    //         raraNumber: '',
    //     }))
    // },[locaton])

   
    const capitalize = (str) =>{ return str.charAt(0).toUpperCase() + str.slice(1)}

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleRegister = useCallback(async(body) => {
        await Axios.post('/signup',body).then((res)=>{
            console.log(res)
            window.localStorage.setItem('User_Token',res.data.token);
            window.localStorage.setItem('User_Data',JSON.stringify(res.data.user));
            navigate('/')
            setRegisterBody({
                name: '',
                email: '',
                mobile: '',
                password: ''
            })
            setUser(res.data.user)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const login = useCallback(async(body)=>{

        await Axios.post('login',body).then((res)=>{
            console.log(res)
            window.localStorage.setItem('User_Token',res.data.token);
            window.localStorage.setItem('User_Data',JSON.stringify(res.data.user));
            setLoginBody({
                email: '',
                password: ''
            })
            window.location.reload();
        }).catch((err)=>{
            console.log(err)
            window.alert("Login Error")
        })


    },[])

    useEffect(()=>{
        let user = window.localStorage.getItem('User_Data');
        // console.log(JSON.parse(user))
        setUser(JSON.parse(user));

        setPrevFilter(searchData)
        setLocation(searchData && searchData.location)

    },[])

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const enterKey = (e) => {
        console.log(e)
        if(e.code === "Enter" || e.code === "NumpadEnter"){
            window.sessionStorage.setItem("filter Values",JSON.stringify({
                location: locaton,
                locality: '',
                minPrice: 0,
                maxPrice: 100000000,            
                price: [0,100000000],
                propertyType: '',
                spaceType: '',
                postedBy: '',
                status: '',
                minArea: 200,
                maxArea: 5000,
                area: [200,5000],
                raraProperty: '',
                raraNumber: '',
                search: e.target.value
            }))
        }
    }

  return (
      <>
    <AppBar position={position} sx={position==="absolute" ? {background: "transparent",boxShadow: "none",display: `${display ? 'block' : 'none'}`} : {background: "transparent",display: `${display ? 'block' : 'none'}`,p: "0 5.5vw 0 1.7vw"}}>
        <Toolbar>            
            <Box sx={{ }}>
                <Link to="/">
                    <img src={Logo} alt="logo" width={259} height={100} />
                </Link>
            </Box> 
            <Box sx={{flexGrow: 1,display: "flex",justifyContent: "center"}}>
            <SearchBox sx={{display: position==="absolute" ? "none" : ""}}>
                    <LocationButton 
                     aria-controls={open1 ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? 'true' : undefined}
                    onClick={handleClick1}
                    endIcon={<KeyboardArrowDownIcon />}>{locaton ? capitalize(locaton) :"Location"}</LocationButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl1}
                        open={open1}
                        onClose={handleClose1}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}                       
                        disableScrollLock={true}
                        sx={{height: "200px",position: "absolute"}}
                        >
                        {/* <MenuItem onClick={handleClose}>Dashboard</MenuItem> */}
                        <StyledMenuItem onClick={handleClose1}>Bangalore</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Bhopal</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Mumbai</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Delhi</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Lucknow</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Hyderabad</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Pune</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Chennai</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Gurgaon</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Noida</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Kolkata</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Ahmedabad</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose1}>Thane</StyledMenuItem>
                    </Menu>
                    <Divider sx={{ height: 44, mr: 2 }} orientation="vertical" />
                    <InputBase 
                        id="searchInput" 
                        sx={{flex: 1}} 
                        placeholder="Search here by locality, project, developer..."
                        value={search}
                        disabled={!locaton}
                        onChange={(e)=>setSearch(e.target.value)} 
                        onKeyUp={(e)=>enterKey(e)}
                         />
                </SearchBox>
            </Box>          
            {
                user ?
                <>
                    <Button 
                        size="large" 
                        endIcon={<KeyboardArrowDownIcon />}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{':hover' : {background: "transparent"},textTransform: "none",color: "#000"}} >{user ? user.name : ""}</Button>
                        <Menu
                           id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            disableScrollLock={true}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            >
                            <MenuItem onClick={()=>{
                                navigate("/dashboard")
                                handleClose();
                                }}>Dashboard</MenuItem>
                            <MenuItem onClick={()=>{
                                signout();
                                handleClose();
                                }}>Logout</MenuItem>
                        </Menu>
                </> : 
                <div>
                    <StyledButton size="large" 
                    // href="#/login" 
                    onClick={handleLoginModalOpen}>Login</StyledButton>
                    <span style={{color: "#000"}}>|</span>
                    <StyledButton size="large" 
                    // href="#/signup" 
                    onClick={handleSignupModalOpen}>Register</StyledButton>
                </div>
            }
        </Toolbar>
    </AppBar>
    <Modal
        open={loginModal}
        onClose={handleLoginModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style1} height={400}>
            <CancelOutlinedIcon onClick={handleLoginModalClose} sx={{position: "absolute",right: "10px",top: "10px"}} />
            <Box sx={{display: 'flex',flexDirection: "column",alignItems: "center",my: 5}}>
                <img src={Logo} alt="logo" width={250}  />
            </Box>
            <Box sx={{mt: 5,px: 4}}>
                <TextField sx={{mb: 1}} id="standard-basic" label="Email" variant="standard" fullWidth onChange={(e)=>setLoginBody({...loginBody,email: e.target.value})} />
                <FormControl sx={{width: '100%',mb: 4 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        // value={values.password}
                        onChange={(e)=>{
                            handleChange('password')
                            setLoginBody({...loginBody,password: e.target.value})
                        }}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox size="small" />} 
                        label={
                            <Typography sx={{fontSize: "14px"}}>I agree to Metro Ghar <span style={{color: 'blue'}}>Terms & Conditions, Privacy Policy</span></Typography>
                        } />
                </FormGroup>
                <StyledButton onClick={()=>{
                    login(loginBody);
                    handleLoginModalClose()
                }} variant="contained" sx={{width: "100%",mt:4,fontSize: "16px"}}>Submit</StyledButton>
                <Typography sx={{textAlign: "center",fontSize: "18px",mt: 2}}>Dont’ have an account? <span style={{color: "blue",cursor: "pointer"}} onClick={()=>{
                    handleLoginModalClose();
                    handleSignupModalOpen();
                }}>Sign up</span></Typography>
            </Box>
        </Box>
    </Modal>
    <Modal
        open={signupModal}
        onClose={handleSignupModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style1}>
            <CancelOutlinedIcon onClick={handleSignupModalClose} sx={{position: "absolute",right: "10px",top: "10px"}} />
            <Box sx={{display: 'flex',flexDirection: "column",alignItems: "center",}}>
                <img src={Logo} alt="logo" width={250} />
            </Box>
            <Box sx={{mt: 2,px: 4}}>
                <TextField sx={{mb: 1}} id="standard-basic" label="Name" variant="standard" fullWidth onChange={(e)=>setRegisterBody({...registerBody,name: e.target.value})} />
                <TextField sx={{mb: 1}} id="standard-basic" label="Email" variant="standard" fullWidth onChange={(e)=>setRegisterBody({...registerBody,email: e.target.value})} />
                <TextField sx={{mb: 1}} id="standard-basic" label="Mobile No." variant="standard" fullWidth onChange={(e)=>setRegisterBody({...registerBody,mobile: e.target.value})} />
                <FormControl sx={{width: '100%',mb: 2 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={(e)=>{
                            handleChange('password')
                            setRegisterBody({...registerBody,password: e.target.value})
                            }}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{width: '100%',mb: 2 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        // value={values.password}
                        onChange={(e)=>{
                            handleChange('password')
                            // setRegisterBody({...registerBody,password: e.target.value})
                            }}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox size="small" />} 
                        label={
                            <Typography sx={{fontSize: "14px"}}>I agree to Metro Ghar <span style={{color: 'blue'}}>Terms & Conditions, Privacy Policy</span></Typography>
                        } />
                </FormGroup>
                <StyledButton variant="contained"
                onClick={()=>{
                    console.log(registerBody)
                    handleRegister(registerBody)
                    handleSignupModalClose()
                }}
                 sx={{width: "100%",mt:4,fontSize: "16px"}}>Submit</StyledButton>
                <Typography sx={{textAlign: "center",fontSize: "18px",mt: 2}}>Already have an account? <span style={{color: "blue",cursor: "pointer"}} onClick={()=>{
                    handleSignupModalClose();
                    handleLoginModalOpen();
                }}>Login</span></Typography>
            </Box>
        </Box>
    </Modal>
    </>
  )
}

export default Navbar;
