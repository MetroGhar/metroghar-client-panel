import React, { useCallback, useEffect, useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { 
    Box,
    Typography,
    Grid,
    Modal,
} from "@mui/material";
import AboutProject from "../../Components/AboutProperty/AboutProject";
import AboutPricing from "../../Components/AboutProperty/AboutPricing";
import AboutLocation from "../../Components/AboutProperty/AboutLocation";
import AboutAmenities from "../../Components/AboutProperty/AboutAmenities";
import AboutBuilder from "../../Components/AboutProperty/AboutBuilder";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Builder from "../../assets/images/builderProfile.png"
import { useParams } from "react-router-dom";
import Carousel,{consts} from "react-elastic-carousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { 
    StyledBreadcrumbs,
    StyledTab,
    StyledTabs,
    ModalHeadTypo,
    FlexBox,
    ProfileWrapper,
    style,
    style1,
    StyledButton,
    HeadTypography,
    GridTypo,
    AddressTypo,
    ContentBox,
    StyledPaper,
    StyledLink,
    HeadBar
 } from "./styles";
import KLC from "../../Components/Utilities/KLC";
import ImageViewer from "../../Components/ImageViewer/ImageViewer";
import Axios from "axios";



 

const AboutProperty = () => {

    const [value, setValue] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const [openImages, setOpenImages] = React.useState(false);
    const [currentImg,setCurrentImg] = useState(0);
    const [submitDialog,setSubmitDialog] = useState(false);
    const [allProperties,setAllProperties] = useState([]);
    const [data,setData] = useState(null);
    const [aboutPricingBox, setAboutPricingBox] = useState(false);
 const [aboutLocationBox, setAboutLocationBox] = useState(false);
 const [aboutAmenitiesBox, setAboutAmenitiesBox] = useState(false);
 const [aboutBuilderBox, setAboutBuilderBox] = useState(false);

    const {id} = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
      
    setValue(newValue)
    if(newValue===2){
        document.querySelector('#aboutPricing').scrollIntoView({ behavior: 'smooth',inline:"start",block: "start" });
        setAboutPricingBox(!aboutPricingBox)
    }
    else if(newValue === 3){
        document.querySelector('#aboutLocation').scrollIntoView({ behavior: 'smooth' });
        setAboutLocationBox(!aboutLocationBox)
    }
    else if(newValue === 4){
        document.querySelector('#aboutAmenities').scrollIntoView({ behavior: 'smooth' });
        setAboutAmenitiesBox(!aboutAmenitiesBox)
    }
    else if(newValue === 5){
        document.querySelector('#aboutBuilder').scrollIntoView({ behavior: 'smooth' });
        setAboutBuilderBox(!aboutBuilderBox);
    }
    // switch(newValue){
    //     case 2: document.querySelector('#aboutPricing').scrollIntoView({ behavior: 'smooth' });
    //     case 3: document.querySelector('#aboutLocation').scrollIntoView({ behavior: 'smooth' });
    //     case 4: document.querySelector('#aboutAmenities').scrollIntoView({ behavior: 'smooth' });
    //     case 5: document.querySelector('#aboutBuilder').scrollIntoView({ behavior: 'smooth' });
    //     default: ;
    // }
    
};

const handleSubmitDialogOpen = () => {
    handleClose();
    setSubmitDialog(true);
    setTimeout(()=>{
        handleSubmitDialogClose();
    },2000);
  };

  const handleSubmitDialogClose = () => {
    setSubmitDialog(false);
  };

 const getPropertiesById = useCallback(async()=>{
    Axios.get(`/project/${id}`).then(res=>{
        console.log(res);
        setData(res.data)
    }).catch(err=>{
        console.log(err);
    })
 },[]) 
 useEffect(()=>{
    getPropertiesById();
console.log("i m gere")
 },[id])

//  useEffect(()=>{    
//     const dat = allProperties.length>0 ? allProperties.filter(val =>{ return val.id === id }) : []
//     setData(dat[0]);
//     console.log("ALL : ",allProperties,"data: ",dat)
//     // document.getElementsByClassName('MuiTabs-indicator')[0].style.width = "100px";
//     // document.getElementsByClassName('MuiTabs-indicator')[0].style.left = "101px";
//  },[id,allProperties])


 function myArrow({ type, onClick, isEdge }) {       
    return type === consts.PREV ?  (
        <ArrowBackIosIcon onClick={onClick} sx={{color: '#FEAA7B',fontSize: "40px",position: "absolute",left: "10px",top: "220px",zIndex: 10}} />
    ) :
    (
        <ArrowForwardIosIcon onClick={onClick} sx={{color: '#FEAA7B',fontSize: "40px",position: "absolute",right: "10px",top: "220px"}} /> 
    )
  }
 
//   let reff;
    return(
    <>
         <StyledBreadcrumbs aria-label="breadcrumb">
            <StyledLink underline="hover" color="inherit" to="/">
            Home
            </StyledLink>
            <StyledLink
            underline="hover"
            color="inherit"
            to="/search"
            >
            Properties
            </StyledLink>
            <Typography color="text.primary">{data && data.projectname }</Typography>
        </StyledBreadcrumbs>
        <StyledPaper elevation={2} variant="square">
            <Box sx={{width: "80vw",height: "500px",display: "flex"}}>
                <Carousel 
                    renderArrow={myArrow} 
                    style={{position: "relative"}}  
                    itemsToShow={1} 
                    pagination={false} 
                   
                >
                {
                        data && data.externalimages && data.externalimages.length>0 && data.externalimages.map((val,i)=>{
                            return(
                                <div key={i} style={{height: "500px"}}>
                                    <img src={val.secure_url} alt="property" width="100%" height="100%"   />
                                </div>
                            )
                        })
                    } 
                </Carousel>
                <Box sx={{display: "flex",flexDirection: "column",justifyContent: "space-between",ml:1}}>
                    <Box sx={{height: "162px",width: "200px",opacity: "0.6",":hover": {opacity: 1}}} onClick={()=>{
                        setCurrentImg(data.externalimages.length);
                        setOpenImages(true)
                        }}>
                        <img src={data && data.internalimages[0].secure_url} alt="property" width="100%" height="100%"   />
                    </Box>
                    <Box sx={{height: "162px",width: "200px",opacity: "0.6",":hover": {opacity: 1}}} onClick={()=>{
                        setCurrentImg(data.externalimages.length+data.internalimages.length);
                        setOpenImages(true)
                        }}>
                        <img src={data && data.amenitiesimages[0].secure_url} alt="property" width="100%" height="100%"   />
                    </Box>
                    <Box sx={{height: "162px",width: "200px",position: "relative"}} onClick={()=>{
                        setCurrentImg(data.externalimages.length+data.internalimages.length+data.amenitiesimages.length);
                        setOpenImages(true)
                        }}>
                        <p style={{position: "absolute",opacity: "1",zIndex: 100,left: "55px",top: "45px"}}>View More+</p>
                        <img src={data && data.othersimages[0].secure_url} alt="property" width="100%" height="100%"  className="imgViewMore" />
                    </Box>
                </Box>
                {/* <Carousel>
                    {
                        data && data.mainImageUrls && data.mainImageUrls.length>0 && data.mainImageUrls.map((val,i)=>{
                            return(
                                <div style={{height: "370px"}} onClick={()=>setOpenImages(true)}>
                                    <img src={data.mainImageUrls[i]} alt="property"   />
                                </div>
                            )
                        })
                    } 
                </Carousel> */}
            </Box>
            <ContentBox>
                <Box>
                    <HeadTypography>{data ? data.projectname : ""}</HeadTypography>
                    <Typography variant="subtitle2">By {data ? data.buildername: ''}</Typography>
                    <AddressTypo><LocationOnOutlinedIcon sx={{fontSize: "18px"}} />{data ? data.ownerAddress : ""}</AddressTypo>
                </Box>
                <Grid container rowSpacing={3}>
                    <Grid item xs={5}><GridTypo><span>Possession Status</span> <span style={{color: "#000",fontSize: "16px"}}>{data ? data.projectpossessionstatus : ''}</span></GridTypo></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}><GridTypo><span>Property Type</span> <span style={{color: "#000",fontSize: "16px",textTransform: 'capitalize'}}>{data ? data.projecttype : ""}</span></GridTypo></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}><GridTypo><span>Space (Builtup Area)</span> <span style={{color: "#000",fontSize: "16px"}}>{data ? `${data.projectminspace} - ${data.projectmaxspace} sqft` : ""}</span></GridTypo></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}><GridTypo><span>Configurations</span> <span style={{color: "#000",fontSize: "16px"}}>{data ? data.projectconfiguration : ""}</span></GridTypo></Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <HeadTypography align="center">Rs {data ? `${KLC(data.projectminprice)} - ${KLC(data.projectmaxprice)}` : ""}</HeadTypography>
                <Box sx={{display: "flex",justifyContent: "space-around"}}>   
                    <StyledButton  onClick={handleOpen} sx={{width: "90%"}} variant="contained" >I'm Interested</StyledButton>                    
                </Box>
            </ContentBox>
        </StyledPaper>
        <ImageViewer data={data? data : ''} open={openImages} setOpen={setOpenImages} currentImg={currentImg} />
        {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CancelOutlinedIcon onClick={handleClose} sx={{position: "absolute",right: "10px",top: "10px"}} />
                <Box sx={{display: 'flex',flexDirection: "column",alignItems: "center",mb: 1}}>
                    <ProfileWrapper>
                        <img src={Builder} alt="builder" width="98px" />
                    </ProfileWrapper>
                    <Typography variant="h5" align="center">{data && data.bcpCategory === "Builder" ? "Builder Profile" : "CP Profile"}</Typography>
                </Box>
                <Box sx={{mt: 5}}>
                    <FlexBox>
                        <ModalHeadTypo>{data && data.bcpCategory === "Builder" ? "Organization Name:" : "Name:"}</ModalHeadTypo>
                        <Typography>{data ? data.organisatioName : ""}</Typography>
                    </FlexBox>
                    <FlexBox>
                        <ModalHeadTypo>Email: </ModalHeadTypo>
                        <Typography>{data ? data.ownerEmail : ""}</Typography>
                    </FlexBox>
                    <FlexBox>
                        <ModalHeadTypo>Contact Number: </ModalHeadTypo>
                        <Typography>{data? data.ownerContactNo : ""}</Typography>
                    </FlexBox>
                    <FlexBox>
                        <ModalHeadTypo>Website: </ModalHeadTypo>
                        <Typography>{data ? data.ownerWebsite : ""}</Typography>
                    </FlexBox>
                    <FlexBox>
                        <ModalHeadTypo>Address: </ModalHeadTypo>
                        <Typography>{data ? data.ownerAddress : ""}</Typography>
                    </FlexBox>
                </Box>
            </Box>
        </Modal> */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style1}>
                <CancelOutlinedIcon onClick={handleClose} sx={{position: "absolute",right: "10px",top: "10px"}} />
                <Box sx={{display: 'flex',flexDirection: "column",alignItems: "center",mb: 1}}>
                    <Typography sx={{fontSize: "21px"}} align="center" mt={2}>Please share your contact detail!</Typography>
                </Box>
                <Box sx={{mt: 5,px: 4}}>
                    <TextField sx={{mb: 1}} id="standard-basic" label="Name" variant="standard" fullWidth />
                    <TextField sx={{mb: 1}} id="standard-basic" label="Mobile No." variant="standard" fullWidth />
                    <TextField sx={{mb: 1}} id="standard-basic" label="Email" variant="standard" fullWidth />
                    <TextField sx={{mb: 3}} id="standard-basic" label="Message" variant="standard" fullWidth />
                    <Box sx={{display: "flex",justifyContent: "space-between",mb: 1}}>
                        <FormControlLabel 
                            mr={0}
                            control={<Checkbox size="small" />} 
                            label={
                                <Typography sx={{fontSize: "14px"}}>I’m intrested in Site Visit</Typography>
                            } />
                        <FormControlLabel 
                            mr={0}
                            control={<Checkbox size="small" />} 
                            label={
                                <Typography sx={{fontSize: "14px"}}>I’m intrested in Home Loan</Typography>
                            } />                        
                    </Box>
                    <FormGroup>
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label={
                                <Typography sx={{fontSize: "14px"}}>I agree to be contacted by Metro Gahr and other agents via WhatsApp, SMS, phone, email, etc</Typography>
                            } />
                    </FormGroup>
                    <StyledButton onClick={handleSubmitDialogOpen} variant="contained" sx={{width: "100%",mt:4}}>Submit</StyledButton>
                </Box>
            </Box>
        </Modal>
        <Dialog
            open={submitDialog}
            onClose={handleSubmitDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            
        >
            <DialogTitle id="alert-dialog-title" sx={{textAlign: "center",px: "60px"}}>
                Thanks for sharing the contact details we will get back to you soon!   
            </DialogTitle>
        </Dialog>
        <Box sx={{width: "70vw",mx: "auto"}}>
            {/* <Typography align="center" variant="h3">About The Property</Typography> */}
            <Box sx={{ width: '100%' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                variant="fullWidth"
            >
                <StyledTab value={1} label="About Project" disableRipple="true" />
                <StyledTab value={2} label="About Pricing" />
                <StyledTab value={3} label="About Location" />
                <StyledTab value={4} label="About Amenities" />
                <StyledTab value={5} label="About B/CP" />
            </StyledTabs>
            <div style={{marginTop: "40px"}}>
             <AboutProject data={data} /> 
             <HeadBar id="aboutPricing" onClick={()=>setAboutPricingBox(!aboutPricingBox)}><Typography fontSize={"inherit"}>About Pricing</Typography>{aboutPricingBox ? <ExpandLessIcon /> : <KeyboardArrowDownIcon /> }</HeadBar>
             <AboutPricing  data={data} expand={aboutPricingBox} />
             <HeadBar id="aboutLocation" onClick={()=>setAboutLocationBox(!aboutLocationBox)}><Typography fontSize={"inherit"}>About Location</Typography> {aboutLocationBox ? <ExpandLessIcon /> : <KeyboardArrowDownIcon /> }</HeadBar>
             <AboutLocation lat={data? data.projectlatitude: ''} lng={data ? data.projectlongitude : ''} expand={aboutLocationBox} /> 
             <HeadBar id="aboutAmenities" onClick={()=>setAboutAmenitiesBox(!aboutAmenitiesBox)}><Typography fontSize={"inherit"}>About Amenities</Typography> {aboutAmenitiesBox ? <ExpandLessIcon /> : <KeyboardArrowDownIcon /> }</HeadBar>
             <AboutAmenities data={data} expand={aboutAmenitiesBox} /> 
             <HeadBar id="aboutBuilder" onClick={()=>setAboutBuilderBox(!aboutBuilderBox)}><Typography fontSize={"inherit"}>About Builder</Typography> {aboutBuilderBox ? <ExpandLessIcon /> : <KeyboardArrowDownIcon /> }</HeadBar>
             <AboutBuilder data={data} expand={aboutBuilderBox} /> 
            </div>
            </Box>
        </Box>
    </>
    )
}

export default AboutProperty;